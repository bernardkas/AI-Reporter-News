import { Clock } from 'lucide-react';
import { Button } from '../ui/button';
import { NewsArticle } from '@/types/news';
import { formatRelativeTime } from '@/utils/formatRelativeTime';
import Link from 'next/link';
import noPhoto from '@/assets/no-photo.jpg';
import Image from 'next/image';

const NewsCard = ({ news }: { news: NewsArticle }) => {
  return (
    <div className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
      <Image
        className='rounded-2xl'
        src={news.image ?? noPhoto}
        alt={news.title}
        width={500}
        height={300}
      />
      <div className='p-6'>
        <div className='flex justify-between items-center mb-3'>
          <span className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium'>
            {news.category}
          </span>
          <div className='flex items-center text-gray-500 text-sm'>
            <Clock className='w-4 h-4 mr-1' />
            <span>{formatRelativeTime(news.publishedAt)}</span>
          </div>
        </div>
        <h3 className='text-xl font-bold mb-3 line-clamp-2'>{news.title}</h3>
        <p className='text-gray-600 mb-4 line-clamp-3'>{news.excerpt}</p>
        <Link href={`/news/${news.id}`}>
          <Button className=' cursor-pointer'>Read More →</Button>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
