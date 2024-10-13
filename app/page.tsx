"use client"
import React from 'react'
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Comparisons from '@/components/Comparisons';
import CallToAction from '@/components/CallToAction';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const page = () => {
  return (
    <div className="min-h-screen text-black">
      <Hero />
      <Features />
      <Comparisons />
      <CallToAction />
      <Testimonials />
      <div className="flex items-center justify-center p-5">
        <a href="https://chk.eduzz.com/CAC3A203" className="bg-orange-500 text-gray-900 font-semibold px-12 py-4 rounded-full shadow-lg hover:scale-105 transform transition duration-300">
          Adquira agora o e-book
        </a>
      </div>
      <Footer />
    </div>
  )
}

export default page