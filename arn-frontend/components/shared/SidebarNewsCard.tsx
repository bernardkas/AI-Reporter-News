'use client';
import { formatRelativeTime } from '@/utils/formatRelativeTime';
import Image from 'next/image';
import React from 'react';
import noPhoto from '@/assets/no-photo.jpg';
import { useRouter } from 'next/navigation';

export interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  timeAgo: string;
}

const SidebarNewsCard: React.FC<NewsCardProps> = ({
  id,
  title,
  excerpt,
  image,
  timeAgo,
}) => {
  const router = useRouter();
  const goToNewsDetails = () => {
    router.push(`/news/${id}`);
  };
  return (
    <div
      onClick={goToNewsDetails}
      className='bg-white cursor-pointer rounded-xl shadow-sm border border-gray-200 overflow-hidden w-full max-w-sm'>
      <Image
        src={image || noPhoto}
        width={200}
        height={200}
        alt={title}
        className='w-full h-40 object-cover'
      />

      <div className='p-4'>
        <h3 className='text-md font-semibold text-gray-900 line-clamp-2 hover:underline'>
          {title}
        </h3>
        <p className='text-sm text-gray-600 mt-2 line-clamp-3'>{excerpt}</p>
        <div className='mt-3 text-xs text-gray-500'>
          {formatRelativeTime(timeAgo)}
        </div>
      </div>
    </div>
  );
};

export default SidebarNewsCard;
