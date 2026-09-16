import InnovationGrid from '@/components/innovation/InnovationGrid';
import LatesNews from '@/components/shared/LatesNews';
import SidebarNewsCard from '@/components/shared/SidebarNewsCard';
import { TrendingList } from '@/components/shared/TrendingList';
import { latestArticles, latestNews, sampleNews } from '@/lib/dummy-data';
import { innovationNews } from '@/models/Innovation';
import { NewsArticle } from '@/types/news';
import React from 'react';

const Innovation = async () => {
  const innovationNewsData = (await innovationNews()) as NewsArticle[];

  const trendingNews = innovationNewsData.slice(0, 8);

  const trendingIds = new Set(trendingNews.map(news => news.id));
  const topStories = innovationNewsData
    .filter(news => !trendingIds.has(news.id))
    .slice(0, 3);

  const usedIds = new Set(
    [...trendingNews, ...topStories].map(news => news.id)
  );
  const sidebarNews = innovationNewsData
    .filter(news => !usedIds.has(news.id))
    .slice(0, 5); // Adjust count as needed

  return (
    <div className='container mx-auto px-4 py-12'>
      <LatesNews news={innovationNewsData[0]} />

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12'>
        <div className='lg:col-span-2'>
          <InnovationGrid articles={topStories} title='Latest Innovations' />
          <TrendingList latestNews={trendingNews} />
        </div>

        <div className='space-y-8 flex flex-col'>
          {sidebarNews.map(news => (
            <SidebarNewsCard
              key={news.id}
              title={news.title}
              excerpt={news.excerpt ?? ''}
              image={news.image ?? ''}
              timeAgo={news.publishedAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Innovation;
