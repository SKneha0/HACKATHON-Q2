import React from 'react'
import Image from 'next/image'
import Bg from '@/images/seviceses.jpg'
import { GiCoffeeBeans } from "react-icons/gi";
import { GiCoffeeMug } from "react-icons/gi";
import { GiCoffeeCup } from "react-icons/gi";
function page() {
  return (
<div className=' relative min-h-screen bg-orange-50 flex flex-col items-center sm:w-[100%]'>
        <div className='absolute inset-0 z-0'>
            < Image src={Bg} alt="" className='w-full h-full object-cover'  />
        </div> 
        <div className='relative z-10  flex flex-col  items-center sm:w-full text-center'>
        <h1 className='sm:text-6xl text-4xl text-orange-900 bg-orange-950 p-4 mt-5 font-bold rounded-md '>Our Services</h1>
        <p className='sm:w-[800px] text-xl sm:text-2xl w-64 bg-orange-900 text-orange-950 sm:p-4 p-2 mt-5 rounded-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestias amet deserunt quis blanditiis quae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, voluptatem sit a maiores enim id.  Nostrum id vitae et.</p>
         </div>
         <div className='relative z-10 pb-10 sm:pt-32 pt-10 flex flex-wrap gap-5 justify-center ' >
          <div className=' sm:w-[25%] w-[250px] p-6 bg-orange-900 rounded-lg text-center shadow-md' >
            <GiCoffeeBeans className='text-9xl text-amber-950 mx-auto'/>
            <h1 className='text-3xl font-thin text-orange-950 mt-4'>Original Coffee</h1>
            <p className=' text-orange-950 text-lg mt-3'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet.</p>
            <button className='bg-orange-800 text-lg w-48 h-12 mt-5 rounded-md hover:bg-orange-700 transition-all'>Read More</button>
          </div>
          <div className=' sm:w-[25%] w-[250px] p-6 bg-orange-900 rounded-lg text-center shadow-md' >
            <GiCoffeeMug className='text-9xl text-amber-950 mx-auto'/>
            <h1 className='text-3xl font-thin text-orange-950'>20 Coffee Flavors</h1>
            <p className=' text-center text-orange-950 text-xl'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet.</p> 
            <button className='bg-orange-800 text-lg w-48 h-12 mt-5 rounded-md hover:bg-orange-700 transition-all'>Read More</button>
          </div>
          <div className='sm:w-[25%] w-[250px] p-6 bg-orange-900 rounded-lg text-center shadow-md' >
            <GiCoffeeCup className='text-9xl text-amber-950 mx-auto'/>
            <h1 className='text-3xl font-thin text-orange-950'>Pleasant Abient</h1>
            <p className=' text-center  text-orange-950  text-xl'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet.</p>
            <button className='bg-orange-800 text-lg w-48 h-12 mt-5 rounded-md hover:bg-orange-700 transition-all'>Read More</button>
          </div>
         </div>
       
    </div>
  )
}

export default page
