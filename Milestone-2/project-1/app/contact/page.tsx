
import React from 'react';
import Image from 'next/image';
import Con from '@/images/galleryfour.jpi..jpg';


function Page() {
  return (
    <div className='relative min-h-screen bg-amber-900 px-4 sm:px-6 lg:px-8'>
      <div className='text-center pt-10'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-amber-700'>Contact Us</h1>
      </div>
      
      <div className='relative mt-10 flex justify-center'>
        {/* Image Container */}
        <div className='relative w-full sm:w-2/3 max-w-3xl'>
          <Image
            src={Con}
            alt="Contact Image"
            width={800}
         
            className='rounded-lg shadow-lg'
          />

          {/* Form Positioned Over the Image */}
          <div className='absolute top-0 left-0 w-full sm:pt-44 p-4 bg-black bg-opacity-50'>
            <div className='flex flex-col gap-6'>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                className="w-full h-14 p-3 bg-amber-700 border-2 border-amber-800 rounded shadow-md focus:outline-none focus:border-amber-600"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                className="w-full h-14 p-3 bg-amber-700 border-2 border-amber-800 rounded shadow-md focus:outline-none focus:border-amber-600"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full h-14 p-3 bg-amber-700 border-2 border-amber-800 rounded shadow-md focus:outline-none focus:border-amber-600"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full p-3 bg-amber-700 border-2 border-amber-800 rounded shadow-md focus:outline-none focus:border-amber-600"
              ></textarea>
              <button className="bg-amber-600 rounded-lg border-2 border-amber-800 text-white font-bold py-3 hover:bg-amber-500 transition">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

  
    </div>
  );
}

export default Page;
