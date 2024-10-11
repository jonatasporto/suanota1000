import React from 'react'
const Features = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">📚 O Guia Definitivo para Redação Nota 1000 📚</h2>
        <p className="text-center mb-8">
          Este e-book foi criado para transformar a maneira como você escreve. Com uma linguagem clara e objetiva, trazemos as dicas mais valiosas que realmente fazem a diferença na redação do ENEM.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2">✅ Domínio da norma-padrão</h3>
            <p>Saiba como evitar os deslizes gramaticais que podem comprometer sua nota.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2">✅ Estrutura impecável</h3>
            <p>Aprenda a organizar sua redação de forma lógica, fluida e envolvente.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2">✅ Argumentação poderosa</h3>
            <p>Descubra como desenvolver argumentos sólidos e embasar suas ideias com repertório sociocultural rico.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2">✅ Propostas de intervenção inovadoras</h3>
            <p>Saiba como criar soluções criativas, respeitando os direitos humanos, para os problemas apresentados no tema.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2">✅ Dicas dos erros mais comuns</h3>
            <p>Evite os erros que muitos candidatos cometem e que podem reduzir drasticamente a sua nota.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features