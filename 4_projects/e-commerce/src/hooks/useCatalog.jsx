import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export const useCatalog = () => {
  const navigate = useNavigate()
  const [productList, setProductList] = useState(() => {
    const data = localStorage.getItem('products')
    return data ? JSON.parse(data) : []
  })
  const [cartList, setCartList] = useState(() => {
    const data = localStorage.getItem('cart-buy')
    return data ? JSON.parse(data) : []
  })
  const [toastList, setToastList] = useState([])
  const triggerToast = (message, type) => {
    const id = crypto.randomUUID()
    const newToast = {
      id,
      message,
      type,
    }
    setToastList((current) => {
      const brokenLine = current.length >= 2 ? current.slice(1) : current
      return [...brokenLine, newToast]
    })
    setTimeout(() => {
      setToastList((current) => current.filter(item => item.id !== id))
    }, 3000)
  }
  const closeToast = (id) => {
    setToastList((current) => current.filter(item => item.id !== id))
  }
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(productList))
  },[productList])
  useEffect(() => {
    localStorage.setItem('cart-buy', JSON.stringify(cartList))
  },[cartList])
  const productApi = async () => {
    try {
      const response = await fetch(`https://api.escuelajs.co/api/v1/products`)
      const data = await response.json()
      const fiveProduct = data.slice(15, 20)
      setProductList(fiveProduct)
    } catch (err) {
      console.error('Erro detalhado:', err)
    }
  }
  useEffect(() => {
    if (productList.length === 0) {
      productApi()
    }
  }, [])
  const handleAddProduct = (product, quantity) => {
    if (!product) return
    const validQuantity = quantity <= 0 ? 1 : quantity
    const productExists = cartList.find((item) => item.id === product.id)
    if (productExists) {
      setCartList((currentCart) => 
        currentCart.map((item) => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + validQuantity } 
            : item
        )
      )
    } else {
      const newCartItem = {
        ...product,
        quantity: validQuantity
      }
      setCartList((currentCart) => [...currentCart, newCartItem])
    }
    triggerToast(`${product.title} adicionado ao carrinho!`, 'green')
  }
  const handleAddQuantity = (product, newQuantity) => {
    if (newQuantity === 0 || newQuantity === '') newQuantity = 1
    setCartList((currentProduct) =>
      currentProduct.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: newQuantity }
        }
        return item
      })
    )
  }
  const handleRemove = (product) => {
    const newList = cartList.filter(item => item.id !== product.id)
    setCartList(newList)
    triggerToast(`${product.title} removido do carrinho.`, 'red')
  }
  const handleBack = () => {
    navigate('/catalog', { replace: true })
    setCartList([])
  }
  const handlePurchase = () => {
    navigate('/checkout', { replace: true })
    triggerToast('Compra finalizada com sucesso!', 'green')
  }
  let priceCart = cartList.reduce((ac, product) => {
    return ac + (product.price * product.quantity)
  }, 0)
  return {
    productList,
    cartList,
    toastList,
    closeToast,
    handleAddProduct,
    handleAddQuantity,
    handleRemove,
    priceCart,
    handleBack,
    handlePurchase,
  }
}