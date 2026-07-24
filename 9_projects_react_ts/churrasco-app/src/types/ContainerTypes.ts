export interface ChildrenProps {
  children: React.ReactNode;
}

export interface ChurrascariaState {
  meat: boolean;
  sausage: boolean;
  chicken: boolean;
  bread: boolean;
}

export type ChurrascariaAction =
  | { type: "PEOPLE" }
  | { type: "MEAT" }
  | { type: "SAUSAGE" }
  | { type: "CHICKEN" }
  | { type: "BREAD" }
  | { type: "CLEAR_STATE" };

export interface CalculoState {
  people: number;
  meat: number;
  sausage: number;
  chicken: number;
  bread: number;
}
