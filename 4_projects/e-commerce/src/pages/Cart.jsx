import React, { useState } from 'react'
import { useCatalog } from '../hooks/useCatalog'
import CartProduct from '../components/CartProduct'
import { useStoreContext } from '../context/StoreContext'
import Toast from '../components/Toast'

const Cart = () => {
  const { 
    cartList,
    handleAddQuantity,
    handleRemove,
    priceCart,
    handlePurchase,
    handleBack,
    toastList,
    closeToast,
  } = useStoreContext()
  return (
    <div className='cccart'>
      <div className='container-cart'>
        <h1>Carrinho</h1>
        <section className='container-cart-buy'>
          {cartList && (
            cartList.map((product) => (
              <CartProduct 
                key={product.id}
                cartList={cartList}
                currentProduct={product}
                onAddQuantity={handleAddQuantity}
                onRemove={handleRemove}
              />
            ))
          )}
          {priceCart ? (
            <div className='box-price-cart'>
              <span>{priceCart.toLocaleString('pt-BR', {
                style: 'currency', currency: 'BRL'
              })}</span>
              <button id='btnPurchase'
              onClick={handlePurchase}>Finalizar Compra</button>
            </div>
          ) : (
            <div className='box-empty-cart'>
              <span>Infelizmente ainda não tem nenhum produto no carrinho...</span>
              <span>Que tal voltar clicando no botão abaixo e adquirir algum produto da loja?</span>
              <button className='btn-back-catalog' 
              onClick={handleBack}>Voltar ao Catálogo</button>
            </div>
          )}
        </section>
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

export default Cart
