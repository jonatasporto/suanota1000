import React from 'react'

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Imagine o Momento...</h2>
      <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
        Você se sentindo confiante ao começar a escrever sua redação, sabendo exatamente o que fazer em cada parte. O alívio de saber que todo o seu esforço e preparação te levaram ao resultado que você tanto sonhou. 🏆
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TestimonialCard name="Ana, Estudante" message="Consegui entender perfeitamente como organizar meus argumentos. Sem dúvidas, foi essencial para minha nota." />
        <TestimonialCard name="João, Vestibulando" message="O preço é inacreditável para a quantidade de valor que esse material entrega. Recomendo muito!" />
        <TestimonialCard name="Maria, Vestibulando" message="Esse e-book é incrível! Me ensinou a escrever uma redação nota 1000 e me deu confiança para fazer provas." />
      </div>
    </div>
  </section>
  )
}

  type TestimonialCardProps = {
    name: string;
    message: string;
  };


const TestimonialCard = ({name, message}: TestimonialCardProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
    <p className="text-gray-700 mb-4">"{message}"</p>
    <p className="text-right font-bold text-gray-800">- {name}</p>
  </div>
  )
}


export default Testimonials