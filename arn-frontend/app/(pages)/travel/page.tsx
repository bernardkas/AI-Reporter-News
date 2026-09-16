import SidebarNewsCard from '@/components/shared/SidebarNewsCard';
import DestinationCard from '@/components/travel/DestinationCard';
import TravelFeatureCard from '@/components/travel/TravelFeatureCard';
import TravelHeader from '@/components/travel/TravelHeader';
import TravelNewsGrid from '@/components/travel/TravelNewsGrid';
import TravelTipsCard from '@/components/travel/TravelTipsCard';
import {
  businessNews,
  destinations,
  featuredTravel,
  sampleNews,
  travelTips,
} from '@/lib/dummy-data';
import React from 'react';

const Travel = () => {
  return (
    <section className='container mx-auto px-4 py-12'>
      <TravelHeader />

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <div className='lg:col-span-2'>
          <TravelFeatureCard article={featuredTravel} />

          <div className='mt-10'>
            <h2 className='text-2xl font-bold text-gray-900 mb-6 flex items-center'>
              Popular Destinations
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 ml-2 text-sky-600'
                viewBox='0 0 20 20'
                fill='currentColor'>
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              {destinations.map(destination => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                />
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className='mt-8'>
            <h2 className='text-xl font-bold text-gray-900 mb-4 flex items-center'>
              Travel Tips & Guides
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4 ml-2 text-amber-500'
                viewBox='0 0 20 20'
                fill='currentColor'>
                <path
                  fillRule='evenodd'
                  d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                  clipRule='evenodd'
                />
              </svg>
            </h2>

            <div className='space-y-4'>
              {travelTips.map(tip => (
                <TravelTipsCard key={tip.id} article={tip} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-4 py-6'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8'>
          <div className='lg:col-span-2'>
            <h2 className='text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 mr-2 text-blue-600'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
                />
              </svg>
              More Travel News
            </h2>

            <TravelNewsGrid news={businessNews} />
          </div>

          <div className='space-y-8 flex flex-col'>
            {sampleNews.map(news => (
              <SidebarNewsCard
                key={news.id}
                title={news.title}
                excerpt={news.excerpt}
                image={news.image}
                timeAgo={news.timeAgo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Travel;
