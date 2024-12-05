import React from 'react'
import Image from 'next/image'
import img from '@/images/bg.jpg'

function Home() {
  return (
    <div>
      <div className='main'>
      
       <div className='home'>
        <h1>Hello I&apos; m </h1>
        <h1 className='col'>NEHA SHAHZAD</h1> 
        <h2>UI/UX Designed - Developing - graphic Art</h2>
        <p> And this is My favorite work</p>
       


        <div className='btn'>
            <button>My Work</button>
            <button>Contact Me</button>
        </div>
        </div>

        <div className='img'>
        <Image 
        src={img}
        alt=''
        width={500}
        height={500}
        />
        </div>
      
      </div>
    </div>
  )
}

export default Home
