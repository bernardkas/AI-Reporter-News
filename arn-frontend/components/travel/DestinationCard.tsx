import Image from 'next/image';

export interface Destination {
  id: string;
  name: string;
  country: string;
  imageUrl: string;
  rating: number;
  description: string;
}

const DestinationCard = ({ destination }: { destination: Destination }) => {
  return (
    <div className='group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow'>
      <div className='relative h-48'>
        <Image
          src={destination.imageUrl}
          alt={destination.name}
          layout='fill'
          objectFit='cover'
          className='transition-transform duration-500 group-hover:scale-110'
        />
        <div className='absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-full flex items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4 text-yellow-500 mr-1'
            viewBox='0 0 20 20'
            fill='currentColor'>
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
          </svg>
          <span className='text-sm font-medium'>{destination.rating}</span>
        </div>
      </div>

      <div className='p-4 bg-white'>
        <h3 className='font-bold text-lg text-gray-900'>{destination.name}</h3>
        <p className='text-gray-600 text-sm flex items-center mt-1'>
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
              d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          {destination.country}
        </p>
        <p className='text-gray-700 mt-2 text-sm line-clamp-2'>
          {destination.description}
        </p>
      </div>
    </div>
  );
};

export default DestinationCard;
