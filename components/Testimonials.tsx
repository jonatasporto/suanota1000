import React from 'react'

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">O que estão falando sobre o e-book</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <p>"Consegui entender perfeitamente como organizar meus argumentos. Sem dúvidas, foi essencial para minha nota."</p>
            <p className="mt-4 text-right font-bold">- Ana, Estudante</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <p>"O preço é inacreditável para a quantidade de valor que esse material entrega. Recomendo muito!"</p>
            <p className="mt-4 text-right font-bold">- João, Vestibulando</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials