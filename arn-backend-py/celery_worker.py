
from celery import Celery
from app.services.celery_app import celery
import app.services.news_fetcher

celery = Celery(
    "arn_backend",
    broker="redis://localhost:6379/0",
    backend="redis://localhost:6379/0",
    include=["app.services.news_fetcher"]
)

celery.conf.update(
    timezone='UTC',
    beat_schedule={
        'fetch-every-3-minutes': {
            'task': 'app.services.fetch_news.fetch_news_task',
            'schedule': 180.0,
        }
    }
)

celery.autodiscover_tasks(['app.services'])
