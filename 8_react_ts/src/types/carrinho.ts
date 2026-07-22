export interface CarrinhoItem {
  id: number;
  product: string;
  price: number;
  quantity: number;
}

export interface CarrinhoState {
  items: CarrinhoItem[];
  total: number;
}

type RemovePayload = number;
type ReducePayload = number;

export type CarrinhoAction =
  | { type: "ADD_ITEM"; payload: CarrinhoItem }
  | { type: "REMOVE_ITEM"; payload: RemovePayload }
  | { type: "REDUCE_ITEM"; payload: ReducePayload }
  | { type: "CLEAR_CART" };
