import Image from 'next/image';
import { TravelArticle } from './types';

export default function TravelTipsCard({
  article,
}: {
  article: TravelArticle;
}) {
  return (
    <div className='flex flex-col sm:flex-row items-start bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow'>
      <div className='relative w-full sm:w-32 h-32 sm:h-full flex-shrink-0'>
        <Image
          src={article.image}
          alt={article.title}
          className='w-full h-full object-cover'
        />
      </div>

      <div className='p-4'>
        <span className='inline-block px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs font-medium mb-2'>
          Travel Tip
        </span>
        <h3 className='font-bold text-gray-900'>{article.title}</h3>
        <p className='text-gray-600 text-sm mt-1 line-clamp-2'>
          {article.excerpt}
        </p>
      </div>
    </div>
  );
}
