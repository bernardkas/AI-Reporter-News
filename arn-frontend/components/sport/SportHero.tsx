import React from 'react';
import { sportNews } from '@/lib/dummy-data';
import { Button } from '../ui/button';
import { NewsArticle } from '@/types/news';
import Link from 'next/link';
import { formatRelativeTime } from '@/utils/formatRelativeTime';

interface SportHeroProps {
  news: NewsArticle;
}

const SportHero = ({ news }: SportHeroProps) => {
  const url =
    'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2216339844.jpg?c=16x9&q=h_653,w_1160,c_fill/f_avif';

  return (
    <div className='relative bg-gradient-to-r from-gray-900 to-green-900 h-[70vh] min-h-[500px] flex items-center'>
      <div className='absolute inset-0 bg-black opacity-50'></div>

      <div
        style={{ backgroundImage: `url(${url})` }}
        className={`absolute inset-0 bg-gray-200  bg-cover bg-center border-2 border-dashed w-full h-full`}
      />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-4xl bg-black/50 backdrop-blur-md rounded-xl p-2'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-6 leading-tight '>
            {news?.title}
          </h1>
          <p className='text-xl text-gray-200 mb-8 max-w-3xl'>
            {news?.excerpt}
          </p>
          <div className='flex flex-row justify-between items-center space-x-4'>
            <Link href={`/news/${news?.id}`}>
              <Button className='cursor-pointer px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition'>
                Read Full Story
              </Button>
            </Link>
            <p className='text-gray-200'>
              {formatRelativeTime(news?.publishedAt)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportHero;
