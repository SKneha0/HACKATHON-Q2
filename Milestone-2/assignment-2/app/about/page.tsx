import React from 'react'
import Image from 'next/image'
import About from '@/image/bt.png'
function page() {
  return (
    <div className='bg-neutral-500  w-full '>
      <div  className='text-center pt-14 '>
        <h1 className='text-4xl font-semibold '>About Me</h1>
        <p className='text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, voluptate.</p>
      </div>
      <div className=''>
        <h1 className='sm:text-5xl text-3xl sm:w-[800px] w-80 pl-5 my-10 sm:my-0  font-serif  sm:p-16'>Developing With a Passion While Exploring The World.</h1>
         <div className='flex flex-wrap gap-10 pl-12 sm:pl-14'>
          
            <div className='sm:w-80 w-60 text-lg'>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est in facere blanditiis eaque sequi veniam culpa sunt, rerum placeat voluptas architecto alias voluptate sit repudiandae veritatis nihil quae similique.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit culpa ipsam labore nostrum tempore voluptates minima. Modi esse dolores similique corporis? Laudantium iure quos nesciunt architecto magnam! Nesciunt, tenetur?</p>
            </div>
            <div className='sm:w-80 w-60 text-lg'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laborum cupiditate consequatur harum dolor optio eveniet pariatur modi minima ab perspiciatis dolorum voluptate alias nihil, quia, atque asperiores hic. Commodi.</p>
                <p>Corrupti, tempora soluta itaque dolor nihil totam non omnis magni pariatur nulla.</p>
            <div className='w-32 sm:ml-36 rounded-lg font-thin  text-gray-200 pt-4 h-16  pl-6 bg-black'>
                <button>ReadMore</button>
            </div>
            </div>
            <Image  
                  className='sm:w-[50%]  mb-10  w-[100%]  '
                    src={ About} alt="img" 
                    height={450}/>
        
           </div>
      </div>
    </div>
  )
}

export default page
