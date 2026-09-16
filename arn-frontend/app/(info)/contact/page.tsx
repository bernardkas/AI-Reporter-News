import React from 'react';

const ContactUs = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50'>
      {/* Header Section */}
      <div className='relative py-20 bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden mb-5'>
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-0 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob'></div>
          <div className='absolute top-0 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000'></div>
          <div className='absolute bottom-0 left-1/3 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000'></div>
        </div>

        <div className='max-w-7xl mx-auto px-6 relative z-10'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Contact <span className='text-blue-200'>AI Report News</span>
            </h1>
            <p className='text-xl text-blue-100 max-w-2xl mx-auto'>
              We'd love to hear from you! Reach out to our team for inquiries,
              feedback, or partnerships.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-6 py-16 -mt-16 relative z-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Email Card */}
          <div className='bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100'>
            <div className='p-8'>
              <div className='flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-6 mx-auto'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-12 w-12 text-blue-600'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
              </div>

              <h2 className='text-2xl font-bold text-center text-gray-900 mb-2'>
                Email Us Directly
              </h2>
              <p className='text-gray-600 text-center mb-8'>
                For all inquiries, please reach out to our dedicated support
                team
              </p>

              <div className='flex flex-col items-center'>
                <div className='bg-gray-100 rounded-xl p-6 w-full max-w-md mb-6'>
                  <div className='text-center'>
                    <p className='text-sm text-gray-500 mb-1'>
                      Our primary contact email
                    </p>
                    <a
                      href='mailto:contact@aireport.ai'
                      className='text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors break-all'>
                      contact@aireport.ai
                    </a>
                  </div>
                </div>

                <a
                  href='mailto:contact@aireport.ai'
                  className='bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity inline-flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 mr-2'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                  Send an Email
                </a>
              </div>
            </div>
          </div>

          {/* Information Panel */}
          <div className='space-y-8'>
            <div className='bg-white rounded-3xl p-8 shadow-xl border border-gray-100'>
              <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                Our Response Commitment
              </h2>

              <div className='space-y-6'>
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
                        d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-bold text-lg mb-2'>
                      Quick Response Time
                    </h3>
                    <p className='text-gray-600'>
                      We typically respond to all emails within 24-48 business
                      hours
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
                        d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-bold text-lg mb-2'>
                      Dedicated Support
                    </h3>
                    <p className='text-gray-600'>
                      Your inquiry will be handled by our specialized support
                      team
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
                        d='M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-bold text-lg mb-2'>
                      Secure Communication
                    </h3>
                    <p className='text-gray-600'>
                      All emails are encrypted and handled with strict
                      confidentiality
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white'>
              <h2 className='text-2xl font-bold mb-4'>About AI Report</h2>
              <p className='mb-6'>
                AI Report delivers fully automated, AI-generated news coverage
                across technology, science, business, and world affairs.
              </p>
              <div className='flex items-center'>
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
                <p>24/7 automated news coverage without human intervention</p>
              </div>
            </div>

            <div className='bg-white rounded-3xl p-8 shadow-xl border border-gray-100'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                Frequently Asked Questions
              </h2>

              <div className='space-y-4'>
                <div>
                  <h3 className='font-medium text-lg text-gray-900 mb-2'>
                    Do you offer advertising opportunities?
                  </h3>
                  <p className='text-gray-600'>
                    Yes, we offer AI-curated advertising placements. Contact us
                    for partnership opportunities.
                  </p>
                </div>

                <div>
                  <h3 className='font-medium text-lg text-gray-900 mb-2'>
                    Can I submit news tips or suggestions?
                  </h3>
                  <p className='text-gray-600'>
                    Absolutely! We welcome suggestions for coverage areas at
                    contact@arn.ai
                  </p>
                </div>

                <div>
                  <h3 className='font-medium text-lg text-gray-900 mb-2'>
                    How can I report an issue?
                  </h3>
                  <p className='text-gray-600'>
                    For technical issues or content concerns, email us at
                    contact@arn.ai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
