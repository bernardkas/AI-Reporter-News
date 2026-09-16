'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Server, BarChart2 } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className='max-w-6xl mx-auto px-4 py-16'>
      <motion.div
        className='mb-16 text-center'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 text-teal-600 mb-6'>
          <ShieldCheck className='h-8 w-8' />
        </div>
        <motion.h1
          className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}>
          Privacy Policy
        </motion.h1>
        <motion.p
          className='text-xl text-gray-600 max-w-3xl mx-auto'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}>
          Effective: {new Date().toLocaleDateString()}
        </motion.p>
      </motion.div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
        <motion.div
          className='space-y-8'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}>
          <div className='bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl p-8 text-white'>
            <h3 className='text-xl font-bold mb-4'>Your Privacy Rights</h3>
            <ul className='space-y-4'>
              <li className='flex items-start'>
                <div className='bg-white/20 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0'>
                  ✓
                </div>
                <span>Right to access your personal data</span>
              </li>
              <li className='flex items-start'>
                <div className='bg-white/20 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0'>
                  ✓
                </div>
                <span>Right to correct inaccurate information</span>
              </li>
              <li className='flex items-start'>
                <div className='bg-white/20 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0'>
                  ✓
                </div>
                <span>Right to delete your personal data</span>
              </li>
              <li className='flex items-start'>
                <div className='bg-white/20 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0'>
                  ✓
                </div>
                <span>Right to data portability</span>
              </li>
            </ul>
          </div>

          <div className='bg-white rounded-2xl shadow-lg p-8 border border-gray-100'>
            <h3 className='text-xl font-bold text-gray-800 mb-4'>
              Security Measures
            </h3>
            <p className='text-gray-600 mb-6'>
              We implement industry-standard security measures to protect your
              personal information from unauthorized access, alteration,
              disclosure, or destruction.
            </p>
            <div className='flex items-center justify-center'>
              <div className='flex flex-col items-center mr-8'>
                <div className='bg-teal-100 p-3 rounded-full mb-2'>
                  <Lock className='h-6 w-6 text-teal-600' />
                </div>
                <p className='text-sm'>Encryption</p>
              </div>
              <div className='flex flex-col items-center'>
                <div className='bg-teal-100 p-3 rounded-full mb-2'>
                  <Server className='h-6 w-6 text-teal-600' />
                </div>
                <p className='text-sm'>Secure Servers</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className='lg:col-span-2 bg-white rounded-2xl shadow-lg p-8 border border-gray-100'
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}>
          <div className='space-y-12'>
            <Section
              title='Information We Collect'
              icon={<BarChart2 className='h-6 w-6 text-teal-600' />}
              content={
                <div>
                  <p className='mb-4'>
                    We collect information to provide better services to all our
                    users. The types of personal information we collect include:
                  </p>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                    <InfoCard
                      title='Account Information'
                      content='Name, email, contact details'
                    />
                    <InfoCard
                      title='Usage Data'
                      content='Pages visited, features used'
                    />
                    <InfoCard
                      title='Device Information'
                      content='IP address, browser type'
                    />
                    <InfoCard
                      title='Cookies'
                      content='Session data, preferences'
                    />
                  </div>
                </div>
              }
            />

            <Section
              title='How We Use Information'
              icon={<BarChart2 className='h-6 w-6 text-teal-600' />}
              content={
                <div className='space-y-6'>
                  <p>We use the information we collect for various purposes:</p>
                  <ul className='list-disc pl-6 space-y-3'>
                    <li>To provide, maintain, and improve our services</li>
                    <li>To personalize your experience and content</li>
                    <li>To communicate with you about updates and offers</li>
                    <li>To detect, prevent, and address technical issues</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                  <div className='bg-teal-50 rounded-xl p-5 mt-4 border border-teal-100'>
                    <p className='text-teal-800 font-medium'>
                      We never sell your personal information to third parties.
                    </p>
                  </div>
                </div>
              }
            />

            <Section
              title='Data Sharing'
              icon={<BarChart2 className='h-6 w-6 text-teal-600' />}
              content={
                <div>
                  <p className='mb-4'>
                    We may share your personal information in the following
                    situations:
                  </p>
                  <div className='overflow-x-auto'>
                    <table className='min-w-full divide-y divide-gray-200'>
                      <thead className='bg-gray-50'>
                        <tr>
                          <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                            With
                          </th>
                          <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                            Purpose
                          </th>
                          <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                            Data Shared
                          </th>
                        </tr>
                      </thead>
                      <tbody className='bg-white divide-y divide-gray-200'>
                        <tr>
                          <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                            Service Providers
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                            To perform services on our behalf
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                            Necessary operational data
                          </td>
                        </tr>
                        <tr>
                          <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                            Business Partners
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                            To offer co-branded services
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                            With your explicit consent
                          </td>
                        </tr>
                        <tr>
                          <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                            Legal Authorities
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                            When required by law
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                            As legally mandated
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              }
            />

            <Section
              title='Data Retention'
              icon={<BarChart2 className='h-6 w-6 text-teal-600' />}
              content={
                <div>
                  <p className='mb-4'>
                    We retain personal information only for as long as necessary
                    to fulfill the purposes for which it was collected,
                    including for the purposes of satisfying any legal,
                    accounting, or reporting requirements.
                  </p>
                </div>
              }
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Section({
  title,
  icon,
  content,
}: {
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}) {
  return (
    <div>
      <div className='flex items-center mb-4'>
        <div className='bg-teal-100 p-2 rounded-lg mr-4'>{icon}</div>
        <h2 className='text-2xl font-bold text-gray-800'>{title}</h2>
      </div>
      <div className='ml-14'>{content}</div>
    </div>
  );
}

function InfoCard({ title, content }: { title: string; content: string }) {
  return (
    <div className='bg-white border border-gray-200 rounded-lg p-4 hover:border-teal-300 transition-colors'>
      <h4 className='font-semibold text-gray-800 mb-1'>{title}</h4>
      <p className='text-gray-600 text-sm'>{content}</p>
    </div>
  );
}
