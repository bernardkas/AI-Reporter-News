import { NewsArticle } from '@/types/news';

const BACKEND_BASE_URL =
  process.env.NEXT_PUBLIC_FASTAPI_URL || 'http://localhost:8000/api/v1';

export async function getNewsData(): Promise<NewsArticle[]> {
  try {
    const res = await fetch(`${BACKEND_BASE_URL}/news`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      const errorBody = await res.text();
      console.error(
        `Failed to fetch news from backend: ${res.status} ${res.statusText} - Body: ${errorBody}`
      );
      throw new Error(`Failed to fetch news: ${res.statusText}`);
    }

    const data: NewsArticle[] = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching news in Home component:', error);
    return [];
  }
}

export async function getNewsById(id: string): Promise<NewsArticle | null> {
  try {
    const res = await fetch(`${BACKEND_BASE_URL}/news/${id}`);

    if (!res.ok) {
      console.error(
        `Failed to fetch news with ID ${id}: ${res.status} ${res.statusText}`
      );
      return null;
    }

    const data: NewsArticle = await res.json();
    return data;
  } catch (error) {
    console.error(`Error fetching news with ID ${id}:`, error);
    return null;
  }
}
