# models.py
from sqlalchemy import Column, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
import uuid
from datetime import datetime

Base = declarative_base()

class GatheringNews(Base):
    __tablename__ = 'gathering_news'

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    title = Column(String, nullable=False)
    description = Column(String)
    image = Column(String)
    link_url = Column(String)
    date = Column(DateTime, default=datetime.utcnow)
