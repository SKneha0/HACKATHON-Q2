import React from 'react'
import { FaLaptopFile } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { MdCoPresent } from "react-icons/md";
function page() {
  return (
    <div  className='bg-neutral-500 p-5 '>
      <div className='text-center '>
        <h1 className='text-4xl'>What Services I&apos;m Providing</h1>
        <p className='text-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, doloribus!</p>
      </div>
      <div className='flex flex-wrap gap-24 pt-20 justify-center'>
        <div className='w-80  bg-neutral-950 text-center'>
            < FaLaptopFile className='ml-24 text-zinc-500 text-9xl' />
            <h1 className='  text-zinc-300 text-3xl'>UI/UX Design</h1>
            <p className='text-2xl p-6 text-zinc-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, perspiciatis?</p>
            <div className=''><button className='bg-zinc-300 w-24 h-10 rounded m-7'> ReadMore</button></div>
        </div>
        <div className='w-80  bg-neutral-950 text-center'>
            < FaLaptopCode className='ml-24 text-zinc-500 text-9xl' />
            <h1 className=' text-zinc-300 text-3xl'>WebDevelopment</h1>
            <p className='text-2xl p-6 text-zinc-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, perspiciatis?</p>
            <div className=''><button className='bg-zinc-300 w-24 h-10 rounded m-7'> ReadMore</button></div>
        </div>
        <div className='w-80  bg-neutral-950 text-center'>
            < MdCoPresent className='ml-24 text-zinc-500 text-9xl' />
            <h1 className=' text-zinc-300  text-3xl'>SEO</h1>
            <p className='text-2xl p-6 text-zinc-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, perspiciatis?</p>
            <div className=''><button className='bg-zinc-300 w-24 h-10 rounded m-7'> ReadMore</button></div>
        </div>
       
      </div>
    </div>
  )
}

export default page
