import React from 'react'
import Image from 'next/image'
import Bgimg from '@/images/mainbg.jpg'
function Banner() {
  return (
    <div>
    <div className='absolute sm:p-14 px-3 pt-12'>
      <h1 className='font-extrabold text-amber-800 sm:text-6xl text-3xl w-10 '>Outstanding</h1>
      <h2 className='font-semibold text-amber-700 sm:pt-9  text-3xl'>Coffee Shop</h2>
      <p className='font-medium   text-amber-800 text-2xl  w-64 sm:w-[500px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugit repellendus saep
        e iste magni et sit enim, dignissimos aliquid!</p>
        <div className='pt-7'>
          <button className='bg-amber-950  text-zinc-100 hover:text-black w-40 text-2xl h-16 '>Learn Now</button>
          </div>
    </div>
      <div>
        <Image  className='sm:w-[100vw] h-[500px] '
         src={Bgimg} alt="img"  />
      </div>

    </div>
  )
}

export default Banner
