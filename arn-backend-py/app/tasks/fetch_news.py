from app.services.ai import fetch_news_from_ai
from app.models.news import News
from app.database import SessionLocal
import json
from datetime import datetime

def fetch_and_save_news(prompt: str):
    db = SessionLocal()
    try:
        results: List[Dict[str, Any]] = fetch_news_from_ai(prompt)

        print('AI Raw Response Text:\n', results)  # Debugging output

        if not results:
            print(f"No news articles parsed from AI response for prompt: '{prompt}'.")
            return

        for item_data in results:
            try:
                title = item_data.get("title")
                if not title:
                    print(f"Skipping news item due to missing or empty title: {item_data}")
                    continue

                excerpt = item_data.get("excerpt", "")
                description = item_data.get("description", "")
                image = item_data.get("image") # Can be None or empty string
                category = item_data.get("category")

                # Date parsing
                date_str = item_data.get("date")
                parsed_date = None
                print(f"Raw date string from AI: {date_str}")  # Debugging output
                
                if date_str:
                    try:
                        # Support full datetime with microseconds: "2025-07-12 17:39:50,383"
                        parsed_date = datetime.strptime(date_str, "%Y-%m-%d %H:%M:%S,%f")
                    except ValueError:
                        try:
                            # Fallback to ISO if needed
                            parsed_date = datetime.fromisoformat(date_str.replace("Z", "+00:00"))
                        except ValueError:
                            print(f"Warning: Could not parse date '{date_str}'. Using current timestamp. Item: {item_data.get('title')}")
                            parsed_date = datetime.now()
                else:
                    parsed_date = datetime.now()


                # Tags (ensure it's a list)
                tags = item_data.get("tag", [])
                if not isinstance(tags, list):
                    tags = [str(tags)] if tags is not None else [] # Convert to list if not already, or empty

                # References (ensure it's a list of dicts, then convert to NewsReference objects)
                references_raw = item_data.get("references_links", [])
                processed_references = []
                if isinstance(references_raw, list):
                    for ref in references_raw:
                        if isinstance(ref, dict) and ref.get("source_name") and ref.get("url"):
                            processed_references.append({
                                "source_name": ref["source_name"],
                                "url": ref["url"]
                            })
                        else:
                            print(f"Warning: Malformed reference in AI response: {ref}")

                else:
                    print(f"Warning: 'references' field is not a list. Value: {references_raw}")

                existing_news = db.query(News).filter_by(title=title).first()

                if existing_news:
                    print(f"Skipping already existing news: {title} at {parsed_date}")
                    continue


                news = News(
                    title=title,
                    excerpt=excerpt,
                    description=description,
                    image=image if image else None, # Ensure HttpUrl accepts None or empty string is handled by Pydantic
                    date=parsed_date,
                    tag=tags,
                    category=category,
                    references_links=json.dumps(processed_references),

                )
                print(f"Processing news item: {news.title}")
                db.add(news)
                db.commit() # Commit each item for better error isolation
                db.refresh(news) # Refresh to get the generated ID
                print(f"Successfully saved news: {news.title}")

            except Exception as e:
                db.rollback() # Rollback the current item if an error occurs for it
                print(f"Error processing and saving a single news item (prompt: '{prompt}'): {e}")
                import traceback
                traceback.print_exc()

    except Exception as e:
        db.rollback() # Rollback the entire transaction if the initial fetch fails
        print(f"Error fetching or processing news for prompt '{prompt}': {e}")
        import traceback
        traceback.print_exc()
    finally:
        db.close() # Ensure the database session is closed
