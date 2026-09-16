// components/business/BusinessNewsGrid.tsx
import React from 'react';
import { Button } from '../ui/button';
import { NewsArticle } from '@/types/news';
import { formatRelativeTime } from '@/utils/formatRelativeTime';

interface BusinessNewsGridProps {
  news: NewsArticle[];
}

const BusinessNewsGrid: React.FC<BusinessNewsGridProps> = ({ news }) => {
  return (
    <div className='space-y-6'>
      {news.map((item, index) => (
        <div
          key={index}
          className='bg-white  rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all p-5'>
          <div className='flex flex-col sm:flex-row'>
            <div className='sm:w-32 sm:flex-shrink-0 mb-4 sm:mb-0 sm:mr-5'>
              {/* <div className='bg-gray-200 border border-gray-300 rounded w-full h-24 flex items-center justify-center text-gray-500 text-sm'>
                {item.symbol}
              </div> */}
            </div>

            <div className='flex-1'>
              <div className='flex justify-between items-start'>
                <h3 className='text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors'>
                  {item.title}
                </h3>
                <span className='text-xs font-medium bg-blue-50 text-blue-700 px-2 py-1 rounded whitespace-nowrap ml-2'>
                  {item.category}
                </span>
              </div>

              <p className='text-gray-600 mb-3'>{item.excerpt}</p>

              <div className='flex justify-between items-center'>
                <div className='flex items-center text-sm text-gray-500'>
                  <span>{formatRelativeTime(item.date)}</span>
                </div>

                <div className='flex items-center'>
                  <Button className=' cursor-pointer font-medium text-sm flex items-center'>
                    Read Full
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4 ml-1'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusinessNewsGrid;
