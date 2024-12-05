import React from 'react'
import Image from 'next/image'
import Homebg from '@/image/bg.jpg'
function Home() {
  return (
    <div className='relative w-full h-screen'>
      <div className='absolute inset-0'>
        <Image 
        className='w-full h-full object-cover '
         src={Homebg} 
         alt="Img" 
        
         />
      </div>
      <div className=' absolute  inset-0 flex flex-col justify-center items-center text-center p-4  sm:p-60'>

        <h1 className='text-2xl sm:text-5xl mt-20 sm:mt-0'>  Wellcome to My Profolio</h1>
        <p className='text-xl sm:text-4xl my-5'> I&apos;m  <span className='font-semibold text-sky-800'>Neha</span> Shahzad  </p>
        <div className='bg-sky-800 text-white text-sm sm:text-lg p-3 sm:p-7 rounded-full'> UI/UX WebDesigned-Developing-Graphic Art </div>
      </div>
    </div>
  )
}

export default Home
