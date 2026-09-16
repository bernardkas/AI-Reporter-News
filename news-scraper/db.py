from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Base

DATABASE_URL = "cockroachdb://bernard:YT5C3IBYIHX4yp6AKv2eCQ@aireportnews-7564.jxf.gcp-europe-west3.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full"

engine = create_engine(DATABASE_URL, echo=True)  # `echo=True` is optional for debugging
SessionLocal = sessionmaker(bind=engine)

def init_db():
    Base.metadata.create_all(bind=engine)
