import React from 'react'
import { HiComputerDesktop } from "react-icons/hi2";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { PiNotePencilDuotone } from "react-icons/pi";
function page() {
  return (
    <div>
      <div className='services'>
        <h2 className=''>My Services</h2>
      </div>
      <div className='ecol'>
  
        <div className='icon'>
      <HiComputerDesktop />
        </div >
        <div className='serrow'>
      <h1>WebDevelopment</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
           Similique voluptatum, corrupti reprehenderit esse necessitatibus saepe?</p>
           <button className='btn'>Read More</button>
        
        </div>
        <div className='icon'>
      <HiOutlineDesktopComputer  />
        </div>
     <div className='serrow'>
     <h1>Web Design</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
           Similique voluptatum, corrupti reprehenderit esse necessitatibus saepe?</p>
           <button className='btn'>Read More</button>
     </div>
      </div>
   
    <div className='rcol'>   
    <div className='icon'>
    <MdOutlineScreenSearchDesktop />
        </div>
      <div className='serrow'>
      <h1 >SEO</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
           Similique voluptatum, corrupti reprehenderit esse necessitatibus saepe?</p>
           <button className='btn'>Read More</button>
      </div>
        <div className='icon'>
      <PiNotePencilDuotone />
        </div>
      <div className='serrow'>
      <h1 >Content Creating</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
           Similique voluptatum, corrupti reprehenderit esse necessitatibus saepe?</p>
           <button className='btn'>Read More</button>
      </div>
    
      
      </div>   
    </div>
  )
}

export default page
