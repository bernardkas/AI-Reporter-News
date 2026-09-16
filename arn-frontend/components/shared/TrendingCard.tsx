'use client';

import { formatRelativeTime } from '@/utils/formatRelativeTime';
import { Clock } from 'lucide-react';
import Image from 'next/image';
import noPhoto from '@/assets/no-photo.jpg';
import { useRouter } from 'next/navigation';

type TrendingCardProps = {
  id: string;
  tag: string[];
  title: string;
  image: string;
  description: string;
  date: string;
};

export const TrendingCard = ({
  id,
  tag,
  title,
  image,
  description,
  date,
}: TrendingCardProps) => {
  const router = useRouter();
  const goToDetails = () => {
    router.push(`/news/${id}`);
  };
  return (
    <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-6'>
        <div onClick={goToDetails} className='cursor-pointer'>
          <div className='flex items-center mb-4'>
            {tag.slice(0, 3)?.map((t, index) => (
              <div
                key={index}
                className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-2'>
                {t}
              </div>
            ))}
          </div>
          <h3 className='text-2xl font-bold mb-3'>{title}</h3>
          <p className='text-gray-600 mb-4'>
            {' '}
            {description.length > 250
              ? `${description.slice(0, 250)}...`
              : description}
          </p>
          <div className='flex items-center text-gray-500'>
            <Clock className='w-4 h-4 mr-1' />
            <span>Updated {formatRelativeTime(date)}</span>
          </div>
        </div>
        <Image
          src={image || noPhoto}
          alt={title}
          width={400}
          height={200}
          className='rounded-xl'
        />
      </div>
    </div>
  );
};
