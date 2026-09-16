from app.services.celery_app import celery
from app.tasks.fetch_news import fetch_and_save_news


@celery.task(name="app.services.news_fetcher.fetch_news_task")
def fetch_news_task():
    prompts = [
        "Find the top 3 lates news articles about USA",
        'Find the top 3 latest news articles about Europe',
        "Find the top 3 latest news articles about Africa",
        "Find the top 3 latest news articles about Asia",
        "Find the top 3 latest news articles about South America",
        "Find the top 3 latest news articles about Australia",
        "Find the top 3 latest news articles about the world",
        "Find the top 3 latest news articles about innovation",
        "Find the top 3 latest news articles about sports",
        "Find the top 3 latest news articles about business",
        "Find the top 3 latest news articles about travel",
    ]
    for prompt in prompts:
        print(f"Fetching news for prompt: {prompt}")
        fetch_and_save_news(prompt)
