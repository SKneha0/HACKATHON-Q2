import React from 'react'
import Home from '@/components/Home'
import About from '@/app/about/page'
import  Services from '@/app/services/page'
import Contact from '@/app/contact/page'
function page() {
  return (
    <div>
      <Home/>
    <About/>
     <Services/>
     <Contact/>
  
    </div>
  )
}

export default page
