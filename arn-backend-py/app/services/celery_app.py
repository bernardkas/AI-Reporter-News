from celery import Celery

celery = Celery(
    "arn_backend",
    broker="redis://localhost:6379/0",
    backend="redis://localhost:6379/0"
)

celery.conf.imports = ["app.services.fetch_news"]
