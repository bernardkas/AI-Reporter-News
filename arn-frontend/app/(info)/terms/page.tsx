'use client';
import { motion } from 'framer-motion';
import { BookText } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 py-16'>
      <motion.div
        className='mb-16 text-center'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-6'>
          <BookText className='h-8 w-8' />
        </div>
        <motion.h1
          className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}>
          Terms of Service
        </motion.h1>
        <motion.p
          className='text-xl text-gray-600 max-w-3xl mx-auto'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}>
          Last updated: {new Date().toLocaleDateString()}
        </motion.p>
      </motion.div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
        <motion.div
          className='lg:col-span-2 bg-white rounded-2xl shadow-lg p-8 border border-gray-100'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}>
          <div className='space-y-12'>
            <Section
              title='Introduction'
              index='01'
              content='Welcome to our service. By accessing or using our platform, you agree to be bound by these Terms of Service. These terms govern your use of our website, applications, and services. If you do not agree with any part of these terms, you must not use our services.'
            />

            <Section
              title='Account Creation'
              index='02'
              content='To access certain features of our service, you may be required to create an account. You must provide accurate and complete information during the registration process and keep your account credentials secure. You are solely responsible for all activities that occur under your account.'
            />

            <Section
              title='User Responsibilities'
              index='03'
              content={
                <ul className='list-disc pl-6 space-y-3'>
                  <li>
                    Provide accurate account information during registration
                  </li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>
                    Do not engage in illegal, fraudulent, or harmful activities
                  </li>
                  <li>Respect the intellectual property rights of others</li>
                  <li>Do not attempt to disrupt or compromise our services</li>
                </ul>
              }
            />

            <Section
              title='Intellectual Property'
              index='04'
              content='All content on this platform, including text, graphics, logos, images, software, and other materials, is our property or the property of our licensors and is protected by intellectual property laws. You may not use, reproduce, distribute, or create derivative works without our express written permission.'
            />

            <Section
              title='Termination'
              index='05'
              content='We reserve the right to suspend or terminate your account and access to our services at our sole discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties, or for any other reason.'
            />

            <div className='bg-indigo-50 rounded-xl p-6 border border-indigo-100'>
              <h3 className='font-semibold text-indigo-800 text-lg mb-3'>
                Questions about our Terms?
              </h3>
              <p className='text-indigo-700'>
                Contact our legal team at{' '}
                <span className='underline'>contact@arn.ai</span> for any
                inquiries regarding these terms.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className='space-y-8'
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}>
          <div className='bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white'>
            <h3 className='text-xl font-bold mb-4'>Key Points</h3>
            <ul className='space-y-4'>
              <li className='flex items-start'>
                <div className='bg-white/20 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0'>
                  1
                </div>
                <span>You retain ownership of your content</span>
              </li>
              <li className='flex items-start'>
                <div className='bg-white/20 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0'>
                  2
                </div>
                <span>We may update these terms periodically</span>
              </li>
              <li className='flex items-start'>
                <div className='bg-white/20 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0'>
                  3
                </div>
                <span>Disputes will be resolved through arbitration</span>
              </li>
              <li className='flex items-start'>
                <div className='bg-white/20 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0'>
                  4
                </div>
                <span>Service is provided as is without warranties</span>
              </li>
            </ul>
          </div>

          <div className='bg-white rounded-2xl shadow-lg p-8 border border-gray-100'>
            <h3 className='text-xl font-bold text-gray-800 mb-4'>Acceptance</h3>
            <p className='text-gray-600 mb-6'>
              By using our services, you acknowledge that you have read,
              understood, and agree to be bound by these Terms of Service.
            </p>
            <div className='flex items-center'>
              <div className='bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16' />
              <div className='ml-4'>
                <p className='font-medium'>Signature</p>
                <p className='text-sm text-gray-500'>User acceptance</p>
              </div>
            </div>
          </div>

          <div className='bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 text-white'>
            <h3 className='text-xl font-bold mb-4'>Changes to Terms</h3>
            <p className='text-gray-300'>
              We may update these Terms of Service from time to time. We will
              notify you of any changes by posting the new terms on this page.
              You are advised to review these terms periodically for any
              changes.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

function Section({
  title,
  index,
  content,
}: {
  title: string;
  index: string;
  content: React.ReactNode;
}) {
  return (
    <div>
      <div className='flex items-center mb-4'>
        <div className='text-4xl font-bold text-indigo-100 mr-4'>{index}</div>
        <h2 className='text-2xl font-bold text-gray-800'>{title}</h2>
      </div>
      <div className='text-gray-600 ml-16'>{content}</div>
    </div>
  );
}

export default TermsPage;
