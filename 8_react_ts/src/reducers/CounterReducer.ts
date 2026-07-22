import type { CounterAction } from "../types/count";

export const CounterReducer = (state: number, action: CounterAction) => {
  switch (action.type) {
    case "INCREMENT": {
      return state + action.payload;
    }
    case "DECREMENT": {
      return state - action.payload;
    }
    case "RESET": {
      return 0;
    }
    default: {
      return state;
    }
  }
};
