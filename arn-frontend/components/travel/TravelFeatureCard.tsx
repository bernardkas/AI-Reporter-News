import Image from 'next/image';
import { TravelArticle } from './types';

const TravelFeatureCard = ({ article }: { article: TravelArticle }) => {
  return (
    <div className='relative rounded-xl overflow-hidden shadow-lg h-96'>
      <Image
        src={article.image}
        alt={article.title}
        layout='fill'
        objectFit='cover'
        className='brightness-90'
      />

      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent'></div>

      <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
        <div className='flex items-center space-x-3 mb-3'>
          <span className='px-3 py-1 bg-sky-500 text-white rounded-full text-sm'>
            {article.category}
          </span>
          <span className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4 mr-1'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
              />
            </svg>
            {article.location}
          </span>
        </div>

        <h2 className='text-2xl font-bold mb-2'>{article.title}</h2>
      </div>
    </div>
  );
};

export default TravelFeatureCard;
