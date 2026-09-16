const TravelHeader = () => {
  return (
    <div className='mb-8'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl md:text-4xl font-bold text-sky-800'>
            Travel Explorer
          </h1>
          <p className='mt-2 text-gray-600'>
            Discover hidden gems and travel insights
          </p>
        </div>
      </div>
      <div className='mt-6 h-px bg-gradient-to-r from-sky-100 via-sky-300 to-sky-100'></div>
    </div>
  );
};

export default TravelHeader;
