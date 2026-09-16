from fastapi import FastAPI
from app.api.v1 import news

app = FastAPI()

app.include_router(news.router, prefix="/api/v1")
