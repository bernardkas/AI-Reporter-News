import { NewsArticle } from '@/types/news';
import { formatRelativeTime } from '@/utils/formatRelativeTime';
import Image from 'next/image';
import noPhoto from '@/assets/no-photo.jpg';

export const RelatedPosts = ({
  articles,
  title = 'Related News',
}: {
  articles: NewsArticle[];
  title?: string;
}) => {
  return (
    <div className='mt-12'>
      <h2 className='text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 flex items-center'>
        {title}
        <span className='ml-3 w-12 h-px bg-gradient-to-r from-blue-500 to-purple-500 flex-grow'></span>
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {articles.slice(0, 3).map(article => (
          <div
            key={article.id}
            className='bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow'>
            <div className='relative h-48'>
              <Image
                src={article.image || noPhoto}
                alt={article.title}
                layout='fill'
                objectFit='cover'
                className='transition-transform duration-300 hover:scale-105'
              />
            </div>
            <div className='p-4'>
              <p className='text-xs text-gray-500 mb-2'>
                {formatRelativeTime(article.date)}
              </p>
              <h3 className='font-bold text-gray-900 mb-2 line-clamp-2'>
                {article.title}
              </h3>
              <p className='text-gray-600 text-sm line-clamp-3'>
                {article.excerpt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
