from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.news import News
from app.schemas.news import NewsSchema


router = APIRouter()

@router.get("/news", response_model=list[NewsSchema])
def get_news(db: Session = Depends(get_db)):
    return db.query(News).order_by(News.publishedAt.desc()).all()

@router.get("/news/{news_id}", response_model=NewsSchema)
def get_news_detail(news_id: str, db: Session = Depends(get_db)):
    news_article = db.query(News).filter(News.id == news_id).first() 

    if not news_article:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="News article not found")

    return news_article

@router.get("/sport", response_model=list[NewsSchema])
def get_sport_news(db: Session = Depends(get_db)):
    return db.query(News).filter(News.category.ilike("Sports")).order_by(News.publishedAt.desc()).all()

@router.get("/business", response_model=list[NewsSchema])
def get_business_news(limit: int = 10, db: Session = Depends(get_db)):
    return (
        db.query(News)
        .filter(News.category.ilike("Business"))
        .order_by(News.publishedAt.desc())
        .limit(limit)
        .all()
    )

@router.get("/innovation", response_model=list[NewsSchema])
def get_innovation_news(limit: int = 10, db: Session = Depends(get_db)):
    return (
        db.query(News)
        .filter(News.category.ilike("Technology"))
        .order_by(News.publishedAt.desc())
        .limit(limit)
        .all()
    )
