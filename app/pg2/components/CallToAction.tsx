import React from 'react'

const CallToAction = () => {
  return (
    <section id="cta" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 text-center">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-6">Não Deixe Para Depois!</h2>
      <p className="text-lg mb-10 max-w-xl mx-auto">
        O tempo de agir é agora! Dê o primeiro passo rumo à sua nota 1000 no ENEM e mude sua história.
      </p>
      <a href="https://chk.eduzz.com/CAC3A203" className="bg-white text-gray-900 font-semibold px-12 py-4 rounded-full shadow-lg hover:scale-105 transform transition duration-300">
        Adquira agora o e-book
      </a>
    </div>
  </section>
  )
}

export default CallToAction