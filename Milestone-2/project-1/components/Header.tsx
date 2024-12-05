
import Link from 'next/link'
import React from 'react'
const Header = () => {
  return (
    <div>
      <header className='bg-zinc-800 flex-col flex justify-between sm:flex-row  '>
        <h1 className='text-4xl sm:text-5xl text-amber-700 font-semibold p-5'>Coffee Cafe</h1>
        <nav>
             <ul className='sm:flex sm:gap-4 text-xl  p-10 sm:text-2xl font-bold text-zinc-200 '> 
                <Link  href="/" > <li className=' hover:text-amber-700'>Home</li></Link>
                <Link  href="/about" ><li className=' hover:text-amber-700'>About</li></Link>
                <Link href="/gallery "><li className=' hover:text-amber-700'>Gallery</li></Link>                  
                <Link href="/servics "><li className=' hover:text-amber-700'>Services</li></Link>                  
                <Link href="/contact "><li className=' hover:text-amber-700'>ContactUs</li></Link>                  
             
            </ul>

        </nav>

      </header>

    </div>
  )
}

export default Header
