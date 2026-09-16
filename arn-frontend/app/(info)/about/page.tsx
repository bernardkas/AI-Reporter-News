import React from 'react';
import about from '@/assets/about.png';
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <div className='bg-gradient-to-b from-blue-50 to-indigo-50 min-h-screen'>
      {/* Hero Section */}
      <div className='relative py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white'>
        <div className="absolute inset-0 bg-[url('/path/to/tech-pattern.svg')] opacity-20"></div>
        <div className='max-w-7xl mx-auto px-6 relative z-10'>
          <div className='flex flex-col lg:flex-row items-center gap-12'>
            <div className='flex-1'>
              <h1 className='text-4xl md:text-5xl font-bold mb-6'>
                About <span className='text-blue-300'>AI Report News</span>
              </h1>
              <p className='text-xl max-w-3xl mb-8'>
                Your trusted source for fully automated, AI-generated news
                coverage across all topics.
              </p>
              <div className='flex items-center space-x-4'>
                <div className='bg-blue-500 rounded-full p-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M13 10V3L4 14h7v7l9-11h-7z'
                    />
                  </svg>
                </div>
                <span>24/7 automated news coverage</span>
              </div>
            </div>
            <div className='flex-1 flex justify-center'>
              <Image
                src={about}
                alt='about'
                width={500}
                height={300}
                className='rounded-xl'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className='py-16'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Our Mission & Vision
            </h2>
            <div className='w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto'></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Revolutionizing Journalism
              </h3>
              <p className='mb-6 text-gray-700'>
                At <strong className='text-blue-600'>AI Report</strong>, we're
                pioneering a new era of journalism where artificial intelligence
                handles everything from research to publication. Our platform
                delivers real-time news without human intervention, eliminating
                delays and reducing bias.
              </p>
              <p className='text-gray-700'>
                We believe that AI-powered journalism can provide more
                consistent, comprehensive coverage that adapts instantly to our
                fast-changing world.
              </p>
            </div>
            <div className='bg-white rounded-2xl shadow-lg p-6 border border-gray-100'>
              <div className='flex items-start mb-6'>
                <div className='bg-blue-100 p-3 rounded-lg mr-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 text-blue-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                    />
                  </svg>
                </div>
                <div>
                  <h4 className='font-bold text-lg mb-2'>Unbiased Reporting</h4>
                  <p className='text-gray-600'>
                    Our AI algorithms are designed to present facts without
                    human prejudice or editorial slant.
                  </p>
                </div>
              </div>

              <div className='flex items-start mb-6'>
                <div className='bg-blue-100 p-3 rounded-lg mr-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 text-blue-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <div>
                  <h4 className='font-bold text-lg mb-2'>Instant Coverage</h4>
                  <p className='text-gray-600'>
                    Breaking news reported within seconds of events occurring,
                    24 hours a day.
                  </p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='bg-blue-100 p-3 rounded-lg mr-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 text-blue-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
                    />
                  </svg>
                </div>
                <div>
                  <h4 className='font-bold text-lg mb-2'>Global Perspective</h4>
                  <p className='text-gray-600'>
                    Simultaneous coverage of events worldwide without geographic
                    limitations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              How Our AI Works
            </h2>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              Our fully automated process ensures news is generated, verified,
              and published without human intervention
            </p>
            <div className='w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4'></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='bg-gradient-to-b from-blue-50 to-white rounded-xl p-6 border border-gray-100 shadow-sm text-center'>
              <div className='bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6'>
                <span className='text-2xl font-bold'>1</span>
              </div>
              <h3 className='font-bold text-xl mb-3'>Data Collection</h3>
              <p className='text-gray-600'>
                Our AI gathers information from thousands of verified sources
                worldwide in real-time.
              </p>
            </div>

            <div className='bg-gradient-to-b from-blue-50 to-white rounded-xl p-6 border border-gray-100 shadow-sm text-center'>
              <div className='bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6'>
                <span className='text-2xl font-bold'>2</span>
              </div>
              <h3 className='font-bold text-xl mb-3'>
                Analysis & Verification
              </h3>
              <p className='text-gray-600'>
                Multiple AI systems cross-reference information to verify
                accuracy and eliminate bias.
              </p>
            </div>

            <div className='bg-gradient-to-b from-blue-50 to-white rounded-xl p-6 border border-gray-100 shadow-sm text-center'>
              <div className='bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6'>
                <span className='text-2xl font-bold'>3</span>
              </div>
              <h3 className='font-bold text-xl mb-3'>Content Generation</h3>
              <p className='text-gray-600'>
                Advanced language models create coherent, informative articles
                with proper context.
              </p>
            </div>

            <div className='bg-gradient-to-b from-blue-50 to-white rounded-xl p-6 border border-gray-100 shadow-sm text-center'>
              <div className='bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6'>
                <span className='text-2xl font-bold'>4</span>
              </div>
              <h3 className='font-bold text-xl mb-3'>Publication</h3>
              <p className='text-gray-600'>
                Articles are instantly published across all platforms with
                optimized formatting.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className='py-16 bg-gradient-to-r from-blue-50 to-purple-50'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Our Core Values
            </h2>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              The principles that guide our AI-driven journalism
            </p>
            <div className='w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4'></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white rounded-2xl p-8 shadow-md border border-gray-100 text-center'>
              <div className='bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-10 w-10 text-blue-600'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                  />
                </svg>
              </div>
              <h3 className='font-bold text-xl mb-3'>Accuracy First</h3>
              <p className='text-gray-600'>
                Our AI prioritizes factual correctness above all, with multiple
                verification layers for every piece of information.
              </p>
            </div>

            <div className='bg-white rounded-2xl p-8 shadow-md border border-gray-100 text-center'>
              <div className='bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-10 w-10 text-purple-600'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
                  />
                </svg>
              </div>
              <h3 className='font-bold text-xl mb-3'>Zero Bias</h3>
              <p className='text-gray-600'>
                Free from human prejudice, our AI presents information without
                political, cultural, or ideological slant.
              </p>
            </div>

            <div className='bg-white rounded-2xl p-8 shadow-md border border-gray-100 text-center'>
              <div className='bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-10 w-10 text-indigo-600'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h3 className='font-bold text-xl mb-3'>Instant Reporting</h3>
              <p className='text-gray-600'>
                News as it happens - our AI delivers reports within seconds of
                events occurring, day or night.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Future Vision */}
      <div className='py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='flex flex-col lg:flex-row gap-12 items-center'>
            <div className='flex-1'>
              <h2 className='text-3xl font-bold mb-6'>
                The Future of Journalism
              </h2>
              <p className='text-xl mb-8 max-w-2xl'>
                We're at the forefront of a media revolution, redefining how
                news is created and consumed.
              </p>
              <div className='space-y-4'>
                <div className='flex items-start'>
                  <div className='bg-white/20 p-2 rounded-lg mr-4'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 10V3L4 14h7v7l9-11h-7z'
                      />
                    </svg>
                  </div>
                  <p>
                    Continuous innovation in AI technology to enhance reporting
                    depth and context
                  </p>
                </div>
                <div className='flex items-start'>
                  <div className='bg-white/20 p-2 rounded-lg mr-4'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 10V3L4 14h7v7l9-11h-7z'
                      />
                    </svg>
                  </div>
                  <p>
                    Expanding coverage to include hyper-local news in every
                    community worldwide
                  </p>
                </div>
                <div className='flex items-start'>
                  <div className='bg-white/20 p-2 rounded-lg mr-4'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 10V3L4 14h7v7l9-11h-7z'
                      />
                    </svg>
                  </div>
                  <p>
                    Developing personalized news experiences while maintaining
                    editorial integrity
                  </p>
                </div>
              </div>
            </div>
            <div className='flex-1 flex justify-center'>
              <div className='bg-white/20 rounded-2xl p-8 border border-white/30'>
                <blockquote className='text-2xl italic mb-6'>
                  AI Report represents the next evolution in journalism - where
                  information flows freely without human limitations or biases.
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='py-16'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <h2 className='text-3xl font-bold text-gray-900 mb-6'>
            Experience the Future of News
          </h2>
          <p className='text-gray-700 text-xl mb-10 max-w-2xl mx-auto'>
            Join millions of readers who trust AI Report for timely, accurate,
            and unbiased news coverage.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/'>
              <button className='cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity'>
                Explore Our News Coverage
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
