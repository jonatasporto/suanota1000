import React from 'react'
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Comparisons from '@/components/Comparisons';
import CallToAction from '@/components/CallToAction';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Features />
      <Comparisons />
      <CallToAction />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default page