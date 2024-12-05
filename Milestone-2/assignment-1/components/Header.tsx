"use client"; // Add this line to indicate it's a client component

import Link from 'next/link';
import React, { useState } from 'react';
import { SlMenu } from 'react-icons/sl';
import { MdClose } from 'react-icons/md'; // Close icon for mobile menu

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="head">
      <header>
        <Link href="/">
          <h1>PORTFOLIO</h1>
        </Link>
        <nav>
          {/* Desktop Menu */}
          <ul className="menu">
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/services"><li>Services</li></Link>
            <Link href="/contact"><li>Contact Us</li></Link>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-button">
          <button onClick={toggleMobileMenu} className="menu-icon">
            {isMobileMenuOpen ? <MdClose /> : <SlMenu />}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <nav className="mobile-menu">
          <Link href="/"><li>Home</li></Link>
          <Link href="/about"><li>About</li></Link>
          <Link href="/services"><li>Services</li></Link>
          <Link href="/contact"><li>Contact Us</li></Link>
        </nav>
      )}
    </div>
  );
}

export default Header;
