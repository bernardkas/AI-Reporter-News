'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

import Logo from './Logo';
import NavigationMenuButton from '../navbar/NavigationMenuBtn';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      className='relative bg-gradient-to-br bg-gray-900 '>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        className='container  px-4  relative z-10'>
        <footer className=' text-white py-12 flex justify-center '>
          <div className='container   px-4'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
              <div>
                <div className='flex items-center mb-4'>
                  <Logo />
                </div>
                <p className='text-gray-400'>The Future of News Starts Here.</p>
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-4'>Categories</h3>
                <NavigationMenuButton linkClassName='flex flex-col bg-transparent gap-3 text-gray-400  hover:text-white transition' />
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-4'>Company</h3>
                <ul className='space-y-2 text-gray-400'>
                  <li>
                    <Link href='/about' className='hover:text-white transition'>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/contact'
                      className='hover:text-white transition'>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-4'>Legal</h3>
                <ul className='space-y-2 text-gray-400'>
                  <li>
                    <Link href='/terms' className='hover:text-white transition'>
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/privacy'
                      className='hover:text-white transition'>
                      Privacy Policy
                    </Link>
                  </li>
                  {/* <li>
                    <Link href='/gdpr' className='hover:text-white transition'>
                      GDPR Compliance
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-500'>
              <p>© 2025 ARN Ai News Network. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
