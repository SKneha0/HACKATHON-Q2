import React from 'react'
import Image from 'next/image'
import Coffee1 from '@/images/galleryfive.jpg'
import Coffee2 from '@/images/gallerysix.jpg'
import Coffee3 from '@/images/gallerythree.jpg'
import Coffee4 from '@/images/galleryfour.jpi..jpg'
import Coffee5 from '@/images/galleryed.jpg'
import Coffee6 from '@/images/galleryone.jpi.webp'
import Coffee7 from '@/images/galleryseven.jpg'
import Coffee8 from '@/images/about.jpg'
import Coffee9 from '@/images/gallerynine.jpg'
function page() {
  return (
    <div>
      <div  className='flex flex-col bg-zinc-50 py-10 items-center '>
        
      <div className='text-center  sm:w-[80%] w-full px-5 '>
      <h1 className='sm:text-5xl sm:ml-20 text-3xl font-semibold text-amber-700 pt-8'>Our Gallery</h1>
        <p className='sm:w-[80%]  sm:ml-28  text-base sm:p-10  text-zinc-700 mt-4 sm:text-lg font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ad possimus nam corrupti 
            debitis optio eveniet sit, illo repudiandae consequatur Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi hic expedita eveniet odio? Tempore, distinctio harum!</p>
      </div>
      <div className='grid sm:grid-cols-3 gap-5 sm:w-[90%] w-full px-5 mt-8'>
        <Image className='w-full h-auto object-cover rounded-md shadow-2xl ' 
          src={Coffee1}alt="img" />
        <Image className='w-full h-auto object-cover rounded-md shadow-2xl' 
          src={Coffee2}alt="img" />
        <Image className='w-full h-auto object-cover rounded-md shadow-2xl' 
          src={Coffee3}alt="img" />
      <Image className='w-full h-auto object-cover rounded-md shadow-2xl ' 
          src={Coffee4}alt="img" />
        <Image className='w-full h-auto object-cover rounded-md shadow-2xl' 
          src={Coffee5}alt="img" />
        <Image className='w-full h-auto object-cover rounded-md shadow-2xl' 
          src={Coffee6}alt="img" />
      <Image className='w-full h-auto object-cover rounded-md shadow-2xl' 
          src={Coffee7}alt="img" />
        <Image className='w-full h-auto object-cover rounded-md shadow-2xl' 
          src={Coffee8}alt="img" />
        <Image className='w-full h-auto object-cover rounded-md shadow-2xl' 
          src={Coffee9}alt="img" />
  </div>
      <div className='mt-10'>
        <button className='bg-amber-800 px-6 py-3 text-lg rounded-md  hover:bg-amber-700 transition-all  text-zinc-100 w-36 h-12   '>
          See More
          </button>
      </div>
      </div>

    </div>
  )
}

export default page
