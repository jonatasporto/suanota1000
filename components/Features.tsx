import React from 'react'
const Features = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        
        <h2 className="text-3xl font-bold text-center mb-8">O Que Você Vai Aprender</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2">Domínio da Norma-padrão</h3>
            <p className="text-sm">Evite deslizes gramaticais que podem comprometer sua nota.</p>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2">Estrutura Impecável</h3>
            <p className="text-sm">Organize sua redação de forma lógica, fluida e envolvente.</p>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2">Propostas de Intervenção</h3>
            <p className="text-sm">Desenvolva soluções criativas e viáveis para os temas apresentados.</p>
          </div>

        </div>
        
      </div>
    </section>
  )
}

export default Features