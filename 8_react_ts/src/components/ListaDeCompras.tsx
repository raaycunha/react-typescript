import { useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

const ListaDeCompras = () => {
  const [productList, setProductList] = useLocalStorage<string[]>({
    key: 'product-list',
    initialValue: [],
  })
  const [product, setProduct] = useState<string>('')
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!product.trim()) return
    setProductList([...productList, product])
    setProduct('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" 
          placeholder="Digite o nome do produto.."
          minLength={1}
          value={product}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProduct(e.target.value)} />
        <button type="submit">Adicionar Produto</button>
      </form>
      <div className="container-products">
        {productList.length > 0 ? (
          productList.map((item, index) => (
            <div key={index}>
              <p>{item}</p>
            </div>
          ))
        ) : (
          <p>Sem produtos</p>
        )}
      </div>
    </div>
  )
}

export default ListaDeCompras
