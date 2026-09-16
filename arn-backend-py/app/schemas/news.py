# app/schemas/news.py
from pydantic import BaseModel, HttpUrl, field_validator # Make sure field_validator is imported
from datetime import datetime
from typing import List, Optional, Any
import json # You need this for json.loads in the validator

# A Pydantic model for each reference item within references_links
class NewsReferenceSchema(BaseModel):
    source_name: str
    url: HttpUrl # Use HttpUrl for URL validation

# The main schema for a single news article
class NewsSchema(BaseModel):
    id: str
    title: str
    excerpt: Optional[str] = None
    description: Optional[str] = None
    image: Optional[HttpUrl] = None
    date: datetime
    tag: List[str] # This is a string because your DB column is VARCHAR.
    category: Optional[str] = None
    # This is the problematic field
    references_links: List[NewsReferenceSchema] # Expects a list of NewsReferenceSchema objects
    publishedAt: Optional[datetime] = None

    class Config:
        from_attributes = True # Important for Pydantic to read from ORM objects

    # Validator for 'tag': If you want to return 'tag' as a list in the API response
    @field_validator('tag', mode='before')
    @classmethod
    def parse_tag_string_to_list(cls, v: Any) -> List[str]:
        if isinstance(v, str):
            try:
                parsed_list = json.loads(v)
                if isinstance(parsed_list, list):
                    return parsed_list
            except json.JSONDecodeError:
                # If it's not valid JSON, treat it as a single tag or an empty list
                return [v] if v else []
        elif isinstance(v, list):
            return v
        return []

    # NEW VALIDATOR FOR 'references_links'
    @field_validator('references_links', mode='before')
    @classmethod
    def parse_references_jsonb_to_list(cls, v: Any) -> List[Any]: # Use Any for initial parsing
        if isinstance(v, str):
            try:
                # Attempt to parse the string as JSON
                parsed_json = json.loads(v)
                if isinstance(parsed_json, list):
                    return parsed_json
            except json.JSONDecodeError:
                # If it's not valid JSON, return an empty list
                return []
        elif isinstance(v, list):
            # If it's already a list, return it directly for further Pydantic validation
            return v
        return [] # Default to empty list if it's neither string nor list