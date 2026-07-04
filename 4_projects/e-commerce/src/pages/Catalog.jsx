import {useState} from 'react'
import CardProduct from '../components/CardProduct'
import Toast from '../components/Toast'
import { useStoreContext } from '../context/StoreContext'

const Catalog = () => {
  const { 
    productList,
    handleAddProduct,
    toastList,
    closeToast,
  } = useStoreContext()
  return (
    <div className='container-catalog'>
      <h1>Catálogo de Produtos</h1>
      <div className='container-product'>
        {productList && (
          productList.map((product) => (
            <CardProduct
              key={product.id}
              currentProduct={product}
              onAddProduct={handleAddProduct}
            />
          ))
        )}
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

export default Catalog
