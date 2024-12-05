import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
export default function page() {
  return (
    <div>
      <div className='about'>
        <h1>ABOUT ME</h1>
      </div>
     
     
     
      <div className='acol'>

        <div className='arow'>
          <h1 className='line'>Who am I ?</h1>
          <h2>A web designer | Web Developer and graphic designer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vit Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, odit. Lorem ipsum dolor sit amet. a</p>
           
          <div className='btn'> <button> Download My CV</button></div>
        </div>
     

        <div className='bcol'>
          <h1> Personal Info</h1> 
         <div className='brow' >
          <ul>
            <li>Birthdate: </li>
              <p>10-11-2005</p>
            <li>Email: </li>
           <p>nahashahzad@gmail.com</p>
            <li>Phone:</li>
              <p>+(32)2345678901</p>
            <li>Address: </li>
              <p>North Nazimabad,Pakistan </p>
             
          </ul>
          <div className='icons'>
            <FaFacebookF className='icon1' />
          < MdOutlineMarkEmailUnread className='icon2'/>
          <FaDiscord className='icon3' /> 
          </div>
         </div>
        </div>

        <div className='ocol'>
          <h1>My Experitise</h1>
          <div className='orow'>
            <ul>
           <li>Web Designing</li>
           <li>Web Development</li>
           <li>UX Design</li>
           <li>UI Design</li>          
           <li>Digital Maketing</li>
           <li>Sketching</li>
            </ul>
          </div>
        </div>
      </div>
      <div>

      </div>
      </div>


  )
}
