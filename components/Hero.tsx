import React from 'react'

const Hero = () => {
  return (
    <section className="bg-orange-500 py-16 text-center text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">
          Quer Alcançar a Nota 1000 no ENEM?
        </h1>
        <p className="text-xl mb-6">
          Transforme sua redação com o nosso guia definitivo por apenas <span className="font-bold">R$19,90</span>.
        </p>
        <a href="https://chk.eduzz.com/CAC3A203" className="bg-white text-orange-500 font-semibold px-8 py-3 rounded-md hover:bg-gray-200">
          Garanta Agora
        </a>
      </div>
    </section>
  )
}

export default Hero