import { NewsArticle } from '@/types/news';

const BACKEND_BASE_URL =
  process.env.NEXT_PUBLIC_FASTAPI_URL || 'http://localhost:8000/api/v1';

export const sportNews = async () => {
  try {
    const res = await fetch(`${BACKEND_BASE_URL}/sport`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      const errorBody = await res.text();
      console.error(
        `Failed to fetch sport news from backend: ${res.status} ${res.statusText} - Body: ${errorBody}`
      );
      throw new Error(`Failed to fetch sport news: ${res.statusText}`);
    }

    const data: NewsArticle[] = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching sport news:', error);
    return [];
  }
};
