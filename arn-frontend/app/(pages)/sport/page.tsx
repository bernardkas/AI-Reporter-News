import NewsCard from '@/components/shared/NewsCard';
import { TrendingCard } from '@/components/shared/TrendingCard';
import { TrendingList } from '@/components/shared/TrendingList';
import SportHero from '@/components/sport/SportHero';
import { trendingNews } from '@/lib/dummy-data';
import { sportNews } from '@/models/Sport';
import React from 'react';

const Sport = async () => {
  const sportNewsData = await sportNews();

  const trendingNews = sportNewsData.slice(0, 8);

  const trendingIds = new Set(trendingNews.map(news => news.id));
  const topStories = sportNewsData
    .filter(news => !trendingIds.has(news.id))
    .slice(0, 15);

  return (
    <div className='bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen'>
      <SportHero news={sportNewsData[0]} />

      <div className='container mx-auto px-4 py-8'>
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
            <span className='bg-blue-500 w-3 h-8 rounded-full mr-3'></span>
            Latest News
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {topStories.map((news: any) => (
              <NewsCard key={news.category} news={news} />
            ))}
          </div>
        </div>
        <TrendingList latestNews={sportNewsData} />
      </div>
    </div>
  );
};

export default Sport;
