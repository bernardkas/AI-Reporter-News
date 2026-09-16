from sqlalchemy import Column, String, DateTime
from sqlalchemy.dialects.postgresql import JSONB, ARRAY
from app.database import Base
import uuid
from datetime import datetime

class News(Base):
    __tablename__ = 'news'
    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4())) # You have bigint, model has String
    title = Column(String)
    excerpt = Column(String)
    description = Column(String)
    image = Column(String)
    date = Column(DateTime)
    tag = Column(ARRAY(String)) # <--- Model now expects ARRAY(String)
    category = Column(String)
    references_links = Column(JSONB) # <--- Model now expects JSONB
    publishedAt = Column(DateTime, default=datetime.utcnow)  

