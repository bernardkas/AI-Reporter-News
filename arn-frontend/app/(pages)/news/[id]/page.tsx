import { Details } from '@/components/shared/Details';

import { getNewsById, getNewsData } from '@/models/News';
import React from 'react';

interface NewsDetailsProps {
  params: { id: string };
}

const NewsDetails = async ({ params }: NewsDetailsProps) => {
  const detailsNews = await getNewsById(params.id);
  const allNews = await getNewsData();

  if (!detailsNews) {
    return <div>News article not found.</div>;
  }

  const otherNews = allNews.filter(news => news.id !== params.id);
  const relatedArticles = otherNews
    .filter(news => news.category === detailsNews.category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const sidebarNews = [...otherNews]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const trendingNews = [...otherNews]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);

  return (
    <Details
      article={detailsNews}
      relatedArticles={relatedArticles}
      sidebarNews={sidebarNews}
      trendingNews={trendingNews}
    />
  );
};

export default NewsDetails;
