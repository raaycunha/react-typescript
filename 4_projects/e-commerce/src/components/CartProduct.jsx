import { useState } from 'react'

const CartProduct = ({ cartList, currentProduct, onAddQuantity, onRemove }) => {
  const [newQuantity, setNewQuantity] = useState(() => {
    return currentProduct.quantity ? currentProduct.quantity : 1
  })
  const handleNewQuantity = (product, value) => {
    if (value <= 0 || value === '') value = 1
    setNewQuantity(value)
    onAddQuantity(product, value)
  }
  return (
    <div className='box-cart-product'>
      <img className='img-product-cart' src={currentProduct.images[0]} />
      <div className='box-info-product'>
        <span className='name-product-cart'>{currentProduct.title}</span>
        <span className='price-product-cart'>{currentProduct.price.toLocaleString('pt-BR', {
          style: 'currency', currency: 'BRL'
        })}</span>
        <div className='box-btn'>
          <input 
            className='box-quantity'
            type="number"
            placeholder='Digite a quantidade..'
            title='Digite a quantidade que você deseja desse produto'
            onChange={(e) => handleNewQuantity(currentProduct, Number(e.target.value))}
            value={newQuantity}
            required minLength={1}
          />
          <button className='btn-remove' 
          onClick={() => onRemove(currentProduct)}>
          Remover</button>
        </div>
      </div>
    </div>
  )
}

export default CartProduct