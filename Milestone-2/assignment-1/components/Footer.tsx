import React from 'react'
import { IoMailUnread } from "react-icons/io5";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
function Footer() {
  return (
    <div className='footer'>
      <div className='fcol'>
        <h1>Portflio</h1>
      </div>
      <div className='ffrow'>
           <h2> neeh@2005 </h2>
           <h2> Myportflio </h2>
             <h2>privacy </h2>
      </div>
      <div>
        <div className='icons'>
            < IoMailUnread />
            <GrFacebookOption/>
            <FaLinkedinIn />
            < FaDiscord />
            < BiLogoInstagramAlt />
        </div>

      </div>
    </div>
  )
}

export default Footer
