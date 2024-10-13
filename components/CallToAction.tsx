import React from 'react'

const CallToAction = () => {
  return (
    <section id="cta" className="bg-orange-500 py-16 text-center text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Não perca essa oportunidade!</h2>
        <p className="text-lg mb-6">Garanta o e-book "Principais Dicas para Nota 1000 no ENEM"</p>
        <a href="https://chk.eduzz.com/CAC3A203" className="bg-white text-orange-500 font-semibold px-8 py-3 rounded-md hover:bg-gray-200">
          Comprar Agora
        </a>
      </div>
    </section>
  )
}

export default CallToAction