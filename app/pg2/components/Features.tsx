import React from 'react'
const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">📚 O Guia Definitivo para Redação Nota 1000 📚</h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Este e-book foi criado para transformar a maneira como você escreve. Com uma linguagem clara e objetiva, trazemos as dicas mais valiosas que realmente fazem a diferença na redação do ENEM.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureBox title="✅ Domínio da norma-padrão" description="Saiba como evitar os deslizes gramaticais que podem comprometer sua nota." />
          <FeatureBox title="✅ Estrutura impecável" description="Aprenda a organizar sua redação de forma lógica, fluida e envolvente." />
          <FeatureBox title="✅ Argumentação poderosa" description="Descubra como desenvolver argumentos sólidos e embasar suas ideias com repertório sociocultural rico." />
          <FeatureBox title="✅ Propostas de intervenção inovadoras" description="Saiba como criar soluções criativas, respeitando os direitos humanos, para os problemas apresentados no tema." />
          <FeatureBox title="✅ Dicas dos erros mais comuns" description="Evite os erros que muitos candidatos cometem e que podem reduzir drasticamente a sua nota." />
        </div>
      </div>
    </section>
  )
}

type FeatureBoxProps = {
  title: string;
  description: string;
};

const FeatureBox = ({title, description}: FeatureBoxProps) => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
    <h3 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
  )
}


export default Features