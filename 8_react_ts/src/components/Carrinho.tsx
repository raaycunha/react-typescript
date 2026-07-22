import { useEffect, useReducer } from "react";
import { ReducerCarrinho } from "../reducers/ReducerCarrinho";
import type { CarrinhoItem, CarrinhoState } from "../types/carrinho";

const Carrinho = () => {
  const getInitialState = (): CarrinhoState => {
    let data = localStorage.getItem("cart_user");
    if (!data || JSON.parse(data).length <= 0) {
      return { items: [], total: 0 };
    } else {
      const newItems = JSON.parse(data);
      const newTotal = newItems.reduce(
        (ac: number, product: CarrinhoItem) =>
          product.price * product.quantity + ac,
        0,
      );
      return { items: newItems, total: newTotal };
    }
  };
  const [state, dispatch] = useReducer(
    ReducerCarrinho,
    undefined,
    getInitialState,
  );
  useEffect(() => {
    localStorage.setItem("cart_user", JSON.stringify(state.items));
  }, [state.items]);
  console.log(state);
  const createProduct = (
    nextId: number,
    product: string,
    price: number,
    quantity: number,
  ): CarrinhoItem => ({
    id: nextId,
    product: product,
    price: price,
    quantity: quantity,
  });
  const newProduct = (): CarrinhoItem => {
    const priceRandom = Math.floor(Math.random() * 100) + 10;
    const quantityRandom = Math.floor(Math.random() * 10) + 1;
    const nextId =
      state.items.length > 0
        ? Math.max(...state.items.map((t) => t.id)) + 1
        : 0;
    return createProduct(nextId, "Novo produto", priceRandom, quantityRandom);
  };
  return (
    <div className="m-3">
      <h1>{state.total}</h1>
      <button
        onClick={() =>
          dispatch({
            type: "ADD_ITEM",
            payload: newProduct(),
          })
        }
      >
        Adicionar Item
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "REMOVE_ITEM",
            payload: 1,
          })
        }
      >
        Remover Item
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "REDUCE_ITEM",
            payload: 2,
          })
        }
      >
        Diminuir quantidade
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "CLEAR_CART",
          })
        }
      >
        Limpar carrinho
      </button>
    </div>
  );
};

export default Carrinho;
