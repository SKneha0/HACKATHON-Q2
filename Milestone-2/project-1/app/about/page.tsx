import React from 'react'
import Image from 'next/image'
import About from '@/images/about.jpg'
function page() {
  return (
    <div className='flex' >
      <div className='sm:p-14 p-10 justify-items-start sm:pt-32'>
        <h1 className='text-5xl text-orange-800 sm:py-12  font-semibold'>About Us</h1>
        <p className='text-xl  text-gray-700 font-medium '>Full cleaning and housekeeping services for companies and households.</p>
        <p className='font-medium text-xl text-gray-700 pt-2 sm:w-[500px] w-[250px] '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ad quis fugiat nam, 
        quam in quidem quas qui ab beatae.</p>
        <div className='pt-11'>
            <button className='bg-orange-800 w-40  h-12'> Read More</button>
        </div>
    </div>
      <div>
        <Image  className='w-[700px] h-[90vh] p-14'
        src={About} alt="img" />
      </div>
      </div>
  )
}

export default page
