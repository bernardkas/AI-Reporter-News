import BusinessNewsGrid from '@/components/business/BusinessNewsGrid';
import LatesNews from '@/components/shared/LatesNews';
import NewsCard from '@/components/shared/NewsCard';
import SidebarNewsCard from '@/components/shared/SidebarNewsCard';
import {
  // businessNews,
  latestNews,
  newsCardsData,
  sampleNews,
} from '@/lib/dummy-data';
import { businessNews } from '@/models/Business';
import { NewsArticle } from '@/types/news';
import React from 'react';

const Business = async () => {
  const businessNewsData = (await businessNews()) as NewsArticle[];

  const trendingNews = businessNewsData.slice(0, 8);

  const trendingIds = new Set(trendingNews.map(news => news.id));
  const topStories = businessNewsData
    .filter(news => !trendingIds.has(news.id))
    .slice(0, 15);

  const usedIds = new Set(
    [...trendingNews, ...topStories].map(news => news.id)
  );
  const sidebarNews = businessNewsData
    .filter(news => !usedIds.has(news.id))
    .slice(0, 5); // Adjust count as needed

  return (
    <div className='min-h-screen  bg-gradient-to-b container mx-auto px-4 py-8 '>
      <div className='flex items-center justify-center my-5 '>
        <h1 className='text-4xl '>Business</h1>
      </div>

      <div className='mx-5'>
        <LatesNews news={businessNewsData[0]} />
      </div>

      <section className='my-12 mx-5'>
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-3xl font-bold text-gray-900'>More News</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {businessNewsData.map(news => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </section>
      <div className='container  px-4 py-6'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8'>
          <div className='lg:col-span-2'>
            <h2 className='text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 mr-2 text-blue-600'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
                />
              </svg>
              Latest Business News
            </h2>

            <BusinessNewsGrid news={topStories} />
          </div>

          <div className='space-y-8 flex flex-col'>
            {sidebarNews.map(news => (
              <SidebarNewsCard
                key={news.id}
                id={news.id}
                title={news.title}
                excerpt={news.excerpt ?? ''}
                image={news.image ?? ''}
                timeAgo={news.publishedAt}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
