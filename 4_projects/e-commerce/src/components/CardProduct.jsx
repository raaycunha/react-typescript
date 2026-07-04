import { useState } from 'react'

const CardProduct = ({ currentProduct, onAddProduct }) => {
  const [quantityProduct, setQuantityProduct] = useState(1)
  const handleAddProduct = () => {
    onAddProduct(currentProduct, quantityProduct)
    setQuantityProduct(1)
  }
  return (
    <div className='card-product'>
      <img className='img-product' src={currentProduct.images[0]} />
      <span className='name-product'>{currentProduct.title}</span>
      <span className='price-product'>{currentProduct.price.toLocaleString('pt-BR', 
        { style: 'currency', currency: 'BRL' })}
      </span>
      <div className='box-select'>
        <select
          id="productQuantity"
          value={quantityProduct}
          onChange={(e) => setQuantityProduct(Number(e.target.value))}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button className='btn-cart' onClick={handleAddProduct}>
        Adicionar ao Carrinho</button>
      </div>
    </div>
  )
}

export default CardProduct