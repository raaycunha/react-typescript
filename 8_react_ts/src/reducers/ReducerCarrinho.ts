import type { CarrinhoAction, CarrinhoState } from "../types/carrinho";

export const ReducerCarrinho = (
  state: CarrinhoState,
  action: CarrinhoAction,
) => {
  switch (action.type) {
    case "ADD_ITEM":
      {
        const newTotal =
          state.total + action.payload.price * action.payload.quantity;
        return {
          items: [...state.items, action.payload],
          total: newTotal,
        };
      }
      222;
    case "REMOVE_ITEM": {
      const itemRemove = state.items.find((item) => item.id === action.payload);
      if (!itemRemove) return state;
      const itensFilter = state.items.filter(
        (item) => item.id !== action.payload,
      );
      const newTotal = state.total - itemRemove.price * itemRemove.quantity;
      return { items: itensFilter, total: newTotal };
    }
    case "REDUCE_ITEM": {
      const itemRemove = state.items.find((item) => item.id === action.payload);
      if (!itemRemove) return state;
      let newList;
      if (itemRemove.quantity <= 1)
        newList = state.items.filter((item) => item.id !== itemRemove.id);
      else {
        newList = state.items.map((item) => {
          if (item.id === itemRemove.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else return item;
        });
      }
      const newTotal = state.total - itemRemove.price * itemRemove.quantity;
      return { items: newList, total: newTotal };
    }
    case "CLEAR_CART": {
      return { items: [], total: 0 };
    }
    default:
      return state;
  }
};
