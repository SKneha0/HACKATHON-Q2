
"use client"
import React from 'react';

function Footer() {
  return (
    <div className='bg-black text-zinc-200'>
      <footer className='flex flex-col md:flex-row gap-10 md:gap-20 text-base md:text-xl p-6 md:p-10 justify-center'>
        <div className='w-full md:w-1/4'>
          <h1 className='font-bold text-amber-700 text-2xl md:text-3xl'>About</h1>
          <p className='pt-4'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt
             ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation u</p>
        </div>
      
        <div className='w-full md:w-1/4'>
          <h1 className='font-bold text-amber-700 text-2xl md:text-3xl'>Menu</h1>
          <ul className='pt-4 space-y-2'>
            <li className='hover:text-amber-500 cursor-pointer'>Home</li>
            <li className='hover:text-amber-500 cursor-pointer'>About</li>
            <li className='hover:text-amber-500 cursor-pointer'>Gallery</li>
            <li className='hover:text-amber-500 cursor-pointer'>Services</li>
            <li className='hover:text-amber-500 cursor-pointer'>Contact Us</li>
          </ul>
        </div>
        <div className='w-full md:w-1/4'>
          <h1 className='font-bold text-amber-700 text-2xl md:text-3xl'>Useful Links</h1>
          <p className='pt-4'>Adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        <div className='w-full md:w-1/4'>
          <h1 className='font-bold text-amber-700 text-2xl md:text-3xl'>Contact Us</h1>
          <ul className='pt-4 space-y-2'>
            <li><span className='font-semibold'>Address:</span> Lorem, ipsum dolor.</li>
            <li><span className='font-semibold'>Call:</span> +23 128356490</li>
            <li><span className='font-semibold'>Email:</span> cafe@gmail.com</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

