
# main.py
import requests
from bs4 import BeautifulSoup
from datetime import datetime
from models import GatheringNews
from db import SessionLocal, init_db
from sqlalchemy.exc import IntegrityError
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException, WebDriverException
import time
import re

init_db()
session = SessionLocal()

def save_news_to_db(title, description, image, link):
    print(f"save_news_to_db called with title: {title[:30]}...")
    session = SessionLocal()
    try:
        # Optional: check if already exists
        existing = session.query(GatheringNews).filter_by(title=title).first()
        if existing:
            print("Already exists, skipping.")
            return

        news = GatheringNews(
            title=title,
            description=description,
            image=image,
            link_url=link
        )
        session.add(news)
        session.commit()
        print("Saved:", news)
    except Exception as e:
        session.rollback()
        print("Error saving news:", e)
    finally:
        session.close()


def scrape_bbc_article_page(driver, article_url):
    try:
        driver.get(article_url)
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.TAG_NAME, 'article'))
        )
        time.sleep(2)

        article_soup = BeautifulSoup(driver.page_source, 'html.parser')

        # Updated selector for the main title (h1)
        title_tag = article_soup.select_one('h1.sc-f98b1ad2-0.dfvxux') or \
                    article_soup.select_one('h1[data-component="headline"]') or \
                    article_soup.select_one('h1[id^="content-heading-"]')

        title = title_tag.get_text(strip=True) if title_tag else "No Title Found"

        # Updated selectors for description paragraphs
        description_paragraphs = article_soup.select('div[data-component="text-block"] p.sc-9a00e533-0.hxuGS')
        description = ' '.join([p.get_text(strip=True) for p in description_paragraphs[:3]]) if description_paragraphs else title

        # Updated selectors for the main image
        image_url = None
        # Prioritize the main <figure> element, then video block captions (which often contain images)
        img_tag = article_soup.select_one('figure img.sc-d1200759-0.dvfjxj') or \
                  article_soup.select_one('div[data-component="image-block"] img') or \
                  article_soup.select_one('div[data-component="video-block"] img')

        if img_tag:
            if img_tag.has_attr('srcset'):
                srcset_urls = img_tag['srcset'].strip().split(',')
                for url_part in reversed(srcset_urls):
                    url_candidate = url_part.strip().split(' ')[0]
                    if url_candidate.startswith('http'):
                        image_url = url_candidate
                        break
            if not image_url and img_tag.has_attr('data-src'):
                image_url = img_tag['data-src']
            if not image_url and img_tag.has_attr('src'):
                image_url = img_tag['src']

            if image_url:
                if 'grey-placeholder' in image_url or image_url.endswith('.gif') or not image_url.startswith('http'):
                    image_url = None

        return {
            'title': title,
            'description': description,
            'image': image_url,
            'link': article_url
        }

    except TimeoutException:
        print(f"Timeout waiting for article elements on {article_url}. Skipping.")
        return None
    except NoSuchElementException:
        print(f"Required element not found on {article_url}. Skipping.")
        return None
    except Exception as e:
        print(f"Error scraping article page {article_url}: {e}")
        return None

def scrape_bbc_section(section_name, url):
    print(f"Scraping BBC section '{section_name}' from URL: {url}")

    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("--shm-size=2gb")
    chrome_options.add_argument('--log-level=3')

    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)
    driver.get(url)

    SCROLL_PAUSE_TIME = 3
    MAX_SCROLLS = 10

    seen_links = set()
    article_links_to_visit = []

    WebDriverWait(driver, 15).until(
        EC.presence_of_element_located((By.CSS_SELECTOR, 'div[data-testid="dundee-card"]'))
    )
    time.sleep(SCROLL_PAUSE_TIME)

    current_scroll = 0
    while current_scroll < MAX_SCROLLS:
        last_height = driver.execute_script("return document.body.scrollHeight")
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(SCROLL_PAUSE_TIME)
        new_height = driver.execute_script("return document.body.scrollHeight")

        page_soup = BeautifulSoup(driver.page_source, 'html.parser')
        article_cards = page_soup.select('div[data-testid="dundee-card"]')

        for card in article_cards:
            link_tag = card.select_one('a[data-testid="internal-link"]')
            if link_tag and link_tag.has_attr("href"):
                href = link_tag["href"]
                full_link = "https://www.bbc.com" + href if href.startswith("/") else href
                if full_link not in seen_links:
                    seen_links.add(full_link)
                    article_links_to_visit.append(full_link)

        print(f"Scroll {current_scroll+1}: Found {len(article_links_to_visit)} unique links so far.")

        if new_height == last_height and current_scroll > 0:
            print("Reached end of scrollable content or no new content loaded.")
            break

        current_scroll += 1

    print(f"\n--- Finished scrolling on section '{section_name}'. Found {len(article_links_to_visit)} unique article links. ---")

    processed_articles_count = 0
    for i, link in enumerate(article_links_to_visit):
        print(f"Processing link {i+1}/{len(article_links_to_visit)}: {link}")
        article_data = scrape_bbc_article_page(driver, link)
        if article_data:
            save_news_to_db(
                title=article_data['title'],
                description=article_data['description'],
                image=article_data['image'],
                link=article_data['link']
            )
            processed_articles_count += 1
        time.sleep(1)

    print(f"\nSuccessfully processed and saved {processed_articles_count} articles from BBC section '{section_name}'.")
    driver.quit()


def scrape_all_bbc_sections():
    BBC_SECTIONS = {
        "news": "https://www.bbc.com/news",
        # "sport": "https://www.bbc.com/sport",
        "business": "https://www.bbc.com/news/business",
        "innovation": "https://www.bbc.com/future"
    }

    for section, url in BBC_SECTIONS.items():
        scrape_bbc_section(section, url)




# 📰 CNN
def scrape_cnn():
    print("Scraping CNN...")
    res = requests.get("https://edition.cnn.com/world")
    soup = BeautifulSoup(res.text, 'html.parser')
    for item in soup.select("h3.cd__headline a"):
        title = item.get_text()
        link = "https://edition.cnn.com" + item['href']
        description = title
        image = None
        date = datetime.utcnow()
        save_news_to_db(title, description, image, date)

# 📰 Reuters
def scrape_reuters():
    print("Scraping Reuters...")
    res = requests.get("https://www.reuters.com/news/archive/worldNews")
    soup = BeautifulSoup(res.text, 'html.parser')
    for item in soup.select("article.story"):
        title = item.select_one("h3.story-title").get_text(strip=True)
        description = item.select_one("p").get_text(strip=True) if item.select_one("p") else title
        image = None
        date = datetime.utcnow()
        save_news_to_db(title, description, image, date)

# 👇 Entry
if __name__ == "__main__":
    scrape_all_bbc_sections()
    scrape_cnn()
    scrape_reuters()
