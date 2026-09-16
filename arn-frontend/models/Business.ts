export const businessNews = async () => {
  const BACKEND_BASE_URL =
    process.env.NEXT_PUBLIC_FASTAPI_URL || 'http://localhost:8000/api/v1';

  try {
    const res = await fetch(`${BACKEND_BASE_URL}/business`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      const errorBody = await res.text();
      console.error(
        `Failed to fetch business news from backend: ${res.status} ${res.statusText} - Body: ${errorBody}`
      );
      throw new Error(`Failed to fetch business news: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching business news:', error);
    return [];
  }
};
