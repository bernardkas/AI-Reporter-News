import LatesNews from '@/components/shared/LatesNews';
import NewsCard from '@/components/shared/NewsCard';
import { TrendingList } from '@/components/shared/TrendingList';
import { getNewsData } from '@/models/News';

export default async function Home() {
  const allNews = await getNewsData();

  console.log('latestNews', allNews);

  const trendingNews = allNews.slice(0, 8);

  const trendingIds = new Set(trendingNews.map(news => news.id));
  const topStories = allNews
    .filter(news => !trendingIds.has(news.id))
    .slice(0, 15);

  return (
    <div>
      <main className='container mx-auto px-4 py-8'>
        <LatesNews news={allNews[0]} />

        <section className='my-12'>
          <div className='flex items-center justify-between mb-6'>
            <h2 className='text-3xl font-bold text-gray-900'>Top Stories</h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {topStories.slice(0, 15).map(news => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </section>

        <TrendingList latestNews={allNews} />
      </main>
    </div>
  );
}
