import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
 import { FaMailBulk } from "react-icons/fa";
import { BsInstagram } from 'react-icons/bs';
import { IoLogoLinkedin } from 'react-icons/io';

function Footer() {
  return (
    <div className='bg-black text-white text-2xl md:text-5xl p-8 md:p-16'>
      <div className='flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-32'>
        <div className='flex gap-6 md:gap-10'>
          <FaFacebookF className='hover:text-blue-400 text-zinc-400' />
          <BsInstagram className='hover:text-purple-500 text-zinc-400' />
          <IoLogoLinkedin className='hover:text-blue-600 text-zinc-400' />
          <FaMailBulk className='hover:text-green-300 text-zinc-400' />
        </div>
        <div className='text-slate-600 font-extrabold'>
          <h1 className='text-center md:text-left'>Neha Shahzad</h1>
        </div> 
        <div className='text-slate-600 font-semibold'>
          <h1 className='text-center md:text-left'>Contact Me</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;

