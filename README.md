# AI News Report

AI News Report is a fully automated news aggregation platform that collects the latest news from multiple sources, processes the content, and presents it in a clean and structured interface.

The system is designed to automatically discover new articles, extract relevant information, process the content, and continuously keep the platform updated with the latest news.

## Overview

The platform automatically:

1. Collects news from configured sources
2. Extracts article content and metadata
3. Processes the collected information
4. Uses AI to structure, summarize, and categorize news
5. Stores processed articles in the database
6. Displays the latest news through a modern web interface

The goal is to reduce manual content management and create an automated pipeline that keeps the news platform continuously updated.

## Tech Stack

### Backend

* Python
* FastAPI
* Automated news scraping
* AI-powered content processing
* REST API

### Frontend

* Next.js
* React
* TypeScript
* Responsive web interface

## How It Works

```text
News Sources
     ↓
Automated Scraper
     ↓
Article Extraction
     ↓
AI Processing
     ↓
Categorization / Summarization
     ↓
Database
     ↓
FastAPI
     ↓
Next.js Frontend
     ↓
Latest News
```

The backend periodically checks configured news sources for newly published articles.

When a new article is detected, the system extracts its content and metadata. AI processing is then used to clean, organize, summarize, and categorize the information before it is stored and made available through the API.

The Next.js frontend consumes the FastAPI API and displays the latest available news.

## Main Features

* Automated news collection
* Automatic detection of new articles
* AI-powered article processing
* News summarization
* Automatic categorization
* Article metadata extraction
* Duplicate article prevention
* REST API built with FastAPI
* Modern Next.js frontend
* Fully automated news pipeline
* Continuously updated latest-news feed

## Project Structure

```text
ai-news-report/
├── backend/
│   ├── app/
│   ├── api/
│   ├── scrapers/
│   ├── services/
│   ├── models/
│   └── main.py
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── public/
│
└── README.md
```

## Backend

The backend is built with **FastAPI** and handles:

* News scraping
* Article extraction
* AI processing
* Data validation
* Duplicate detection
* Database operations
* API endpoints
* Automated processing jobs

Example:

```bash
cd backend

pip install -r requirements.txt

uvicorn app.main:app --reload
```

The API will normally be available at:

```text
http://localhost:8000
```

FastAPI documentation:

```text
http://localhost:8000/docs
```

## Frontend

The frontend is built with **Next.js**.

```bash
cd frontend

npm install

npm run dev
```

The application will normally be available at:

```text
http://localhost:3000
```

## Automation

The platform is designed to run automatically.

A scheduled worker or background process periodically:

```text
Check sources
      ↓
Find new articles
      ↓
Scrape content
      ↓
Process with AI
      ↓
Save article
      ↓
Publish through API
      ↓
Show on frontend
```

No manual article publishing is required once the news sources and automation pipeline are configured.

## AI Processing

AI can be used for tasks such as:

* Generating article summaries
* Detecting article topics
* Categorizing news
* Cleaning extracted content
* Generating short descriptions
* Identifying important information
* Creating structured article metadata

This makes raw scraped news easier to organize and display consistently.

## Example Article Data

```json
{
  "title": "Example News Article",
  "summary": "AI-generated summary of the article.",
  "category": "Technol",
  "source": "Example News",
  "sourceUrl": "https://example.com/article",
  "publishedAt": "2026-09-16T18:00:00Z"
}
```

## Purpose

This project demonstrates how web scraping, artificial intelligence, backend automation, APIs, and a modern frontend can be combined to create a self-updating news platform.

It can be extended with features such as:

* Multiple news providers
* Personalized news feeds
* Trending topics
* Semantic search
* AI-generated daily reports
* Email newsletters
* Push notifications
* Multilingual news
* Source credibility tracking
* Automatic topic clustering

## Disclaimer

Content collected by this platform originates from third-party news sources.

The application should respect each source's terms of service, robots policies, copyright requirements, and content usage restrictions.

Whenever possible, the original publication should remain clearly attributed and linked as the source.

## License

This project is intended for development, demonstration, and educational purposes.
