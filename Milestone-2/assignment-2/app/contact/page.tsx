import React from 'react'

function page() {
  return (
    <div  className='bg-neutral-500 p-5 '>
      <div className='text-center  '>
        <h1 className='text-4xl'>Stay In Touch</h1>
        <p className='text-2xl '> consectetur adipisicing consectetur adipisicing elit. Est nostrum nobis beatae voluptas officiis repudian</p>
      </div>
      <div className='sm:flex flex-wrap sm:mt-28 sm:justify-center ml-12  '>
     
      <input className=' sm:w-[50%] h-20 border-solid border-slate-950	 border-2  sm:text-3xl   ' type="email" name="Email" placeholder='Enter your Email' />
     
           <button className='m-6 bg-black text-zinc-300 w-36 h-10 hover:bg-neutral-700' >SendME</button>
           
      </div>
    </div>
  )
}

export default page
