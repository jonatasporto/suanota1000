import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import CallToAction from './components/CallToAction'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'


const Pg2 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Features />
      <CallToAction />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Pg2