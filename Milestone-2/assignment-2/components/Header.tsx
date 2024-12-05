 "use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleHeader = (): void => {
    setIsClick(!isClick);
  };

  return (
    <div>
      <nav className='bg-neutral-500'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <Link href="/" className='text-white'>Neha Shahzad</Link>
              </div>
            </div>
            <div className='hidden md:block'>
              <div className='ml-4 flex items-center space-x-4'>
                <Link href="/" className='text-white hover:bg-white hover:text-black rounded-lg p-2'>Home</Link>
                <Link href="about" className='text-white hover:bg-white hover:text-black rounded-lg p-2'>About</Link>
                <Link href="services" className='text-white hover:bg-white hover:text-black rounded-lg p-2'>Services</Link>
                <Link href="contact" className='text-white hover:bg-white hover:text-black rounded-lg p-2'>Contact</Link>
              </div>
            </div>
            <div className='md:hidden flex items-center'>
              <button
                className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                onClick={toggleHeader}
              >
                {isClick ? (
                  <svg
                    className='h-6 w-6'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {isClick && (
            <div className='md:hidden'>
              <div className='space-y-1 px-2 pt-2 pb-3 sm:px-3'>
                <Link href="/" className='block text-white hover:bg-white hover:text-black rounded-lg p-2'>Home </Link>
                <Link href="about" className='block text-white hover:bg-white hover:text-black rounded-lg p-2'>About</Link>
                <Link href="/services" className='block text-white hover:bg-white hover:text-black rounded-lg p-2'>Services</Link>
                <Link href="contact" className='block text-white hover:bg-white hover:text-black rounded-lg p-2'>Contact</Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;

 