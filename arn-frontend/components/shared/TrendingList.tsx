'use client';

import { useState } from 'react';
import { TrendingCard } from './TrendingCard'; // adjust if needed
import { Button } from '@/components/ui/button'; // assuming you're using shadcn/ui or similar
import { NewsArticle } from '@/types/news';

type TrendingListProps = {
  latestNews: NewsArticle[];
};

export const TrendingList = ({ latestNews }: TrendingListProps) => {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 8);
  };

  const visibleNews = latestNews.slice(0, visibleCount);

  return (
    <div className='space-y-6'>
      {visibleNews.map(news => (
        <TrendingCard
          key={news.id}
          id={news.id}
          tag={news.tag}
          image={news.image || ''}
          title={news.title}
          description={news.description ?? ''}
          date={news.publishedAt}
        />
      ))}

      {visibleCount < latestNews.length && (
        <div className='flex justify-center mt-4'>
          <Button onClick={handleShowMore}>Show More</Button>
        </div>
      )}
    </div>
  );
};
