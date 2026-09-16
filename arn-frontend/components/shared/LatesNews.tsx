import Link from 'next/link';
import { Button } from '../ui/button';
import { NewsArticle } from '@/types/news';
import { formatRelativeTime } from '@/utils/formatRelativeTime';
import Image from 'next/image';
import noPhoto from '@/assets/no-photo.jpg';

const LatesNews = ({ news }: { news: NewsArticle }) => {
  return (
    <div className='relative bg-gradient-to-r from-white to-gray-100 rounded-xl overflow-hidden shadow-lg mb-12'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-6 pt-12'>
        <div className='md:col-span-2'>
          <div className='flex items-center mb-4'>
            <span className=' text-gray-600 bg-slate-200 px-3 py-1 rounded-full text-sm font-medium'>
              {news.category}
            </span>
            <span className='ml-4 text-gray-600'>
              {formatRelativeTime(news.publishedAt)}
            </span>
          </div>
          <h1 className='text-2xl md:text-3xl font-bold text-black mb-4'>
            {news.title}
          </h1>
          <p className='text-gray-600 mb-6'>{news.excerpt}</p>
          <Link href={`/news/${news.id}`}>
            <Button className='px-5 py-2.5   cursor-pointer font-medium rounded-lg '>
              Read Full Story
            </Button>
          </Link>
        </div>
        <Image
          className='rounded-2xl'
          src={news.image ?? noPhoto}
          alt={news.title}
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default LatesNews;
