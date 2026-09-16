import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link
      href='/'
      className='flex items-center gap-1 h-16 text-2xl font-bold uppercase'>
      <span className='bg-orange-500 text-white px-3 py-1 rounded-md shadow-md tracking-wider'>
        A
      </span>
      <span className='bg-gray-800 text-white px-3 py-1 rounded-md shadow-md tracking-wider'>
        R
      </span>
      <span className='bg-blue-600 text-white px-3 py-1 rounded-md shadow-md tracking-wider'>
        N
      </span>
    </Link>
  );
};

export default Logo;
