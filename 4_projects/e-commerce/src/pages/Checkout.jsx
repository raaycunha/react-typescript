import { useState } from 'react'
import Toast from '../components/Toast'
import { useStoreContext } from '../context/StoreContext'
import { Navigate } from 'react-router-dom'

const Checkout = () => {
  const { 
    cartList,
    priceCart,
    handleBack,
    toastList,
    closeToast,
  } = useStoreContext()
  if (cartList.length === 0) {
    return <Navigate to="/catalog" replace />
  }
  return (
    <div>
      <div className='container-checkout'>
        <h1>Obrigado por sua compra!</h1>
        <p>Seu pedido foi concluído com sucesso.</p>
        <ul className='buy-list'>
          {cartList && (
            cartList.map((product) => (
              <div key={product.id}>
                <li>{`${product.title} - ${product.quantity} x ${product.price.toLocaleString('pt-BR', {
                  style: 'currency', currency: 'BRL'
                })}`}</li>
              </div>
            ))
          )}
        </ul>
        <p>Total: <strong>{priceCart > 0 ? priceCart.toLocaleString('pt-BR', {
          style: 'currency', currency: 'BRL'
        }) : 'Você ainda  não adicionou nada no carrinho, estou aguardando...'}</strong></p>
        <button className='btn-back-catalog' onClick={handleBack}>Voltar ao Catálogo</button>
      </div>
      <div className='container-toasts'>
        {toastList.map(item => (
          <Toast 
            key={item.id}
            message={item.message}
            type={item.type}
            onClose={() => closeToast(item.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Checkout
