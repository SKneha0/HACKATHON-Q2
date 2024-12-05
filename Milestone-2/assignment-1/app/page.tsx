import Header from '@/components/Header'
import Home from '@/components/home'
import About from "@/app/about/page"
import Services from "@/app/services/page"
import Contact from "@/app/contact/page"
import React from 'react'
export default function page() {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Contact/>
    </div>
  )
}
