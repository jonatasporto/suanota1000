import React from 'react'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          🎯 Quer Alcançar a Nota 1000 no ENEM? 🎯
        </h1>
        <p className="text-2xl mb-8 max-w-2xl mx-auto">
          Você já imaginou a sensação de abrir o resultado do ENEM e ver que alcançou a nota máxima na redação? 🤩 Esse sonho pode se tornar realidade com nosso e-book exclusivo!
        </p>
        <a href="#cta" className="bg-white text-gray-900 font-semibold px-10 py-4 rounded-full shadow-lg hover:scale-105 transform transition duration-300">
          Garanta Agora
        </a>
      </div>
    </section>
  )
}

export default Hero