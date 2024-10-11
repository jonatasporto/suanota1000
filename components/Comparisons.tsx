import React from 'react'

const Comparisons = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Por que este e-book vale mais que o preço?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">R$19,90 - Um Lanche Rápido</h3>
            <p>Um lanche dura minutos, mas o conhecimento do e-book pode mudar sua vida acadêmica.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">R$19,90 - Uma Única Aula</h3>
            <p>Uma aula custa bem mais, mas o e-book entrega tudo o que você precisa, em uma única compra.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">R$19,90 - Valor de um Futuro</h3>
            <p>Invista em um futuro de sucesso por menos de R$20.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Comparisons