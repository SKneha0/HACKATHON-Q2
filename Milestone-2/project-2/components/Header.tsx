"use client"
import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import Link from 'next/link';

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='header'>
     
      <div className='headertwo'>
        <Link href="/"><h1>SECURITYGUARD</h1></Link>
        <nav className='row'>
          <ul className={`menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <Link href="/"><li>HOME</li></Link>
            <Link href="about"><li>ABOUT</li></Link>
            <Link href="servicess"><li>SERVICES</li></Link>
            <Link href="contact"><li>CONTACT</li></Link>
          </ul>
        </nav>
        <button className='menu-toggle' onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
        < TiThMenu className='icon'/>
        </button>
      </div>
    </div>
  );
}

export default Header;















// import React from 'react'
// import { FaLocationDot } from "react-icons/fa6";
// import { IoCall } from "react-icons/io5";
// import { FaMailBulk } from "react-icons/fa";
// import Link from 'next/link'
// function Header() {
//   return (
//     <div className='header'>
//       <div className='headercol'>        
//       <div className='hrow'>
//         <p><FaLocationDot className='ions'/>Lorem ipsum dolor sit amet consectetur.</p>
//       </div>
//       <div className='hrow'>
//         <p><IoCall className='ions'/>Call: +10596869980</p>
//       </div>
//       <div className='hrow'>
//         <p>< FaMailBulk  className='ions'/>Mail@.comresponsibility</p>
//       </div>    
//       </div>
//       <div className='headertwo'>
//         <Link href="/">  <h1>SECURITYGUARD</h1>  </Link>
//         <nav className='row'>
//           <ul>
//            <Link href="/"> <li>HOME</li></Link>
//            <Link href="about"> <li>ABOUT</li></Link>
//            <Link href="servicess"> <li>SERVICES</li></Link>
//            <Link href="contact"> <li>CONTACT</li></Link>
//           </ul>
//         </nav>
        
//       </div>
    
    
//     </div>
//   )
// }

// export default Header








