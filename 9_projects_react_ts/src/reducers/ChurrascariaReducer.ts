import type {
  ChurrascariaAction,
  ChurrascariaState,
} from "../types/ContainerTypes";

export const ChurrascariaReducer = (
  state: ChurrascariaState,
  action: ChurrascariaAction,
) => {
  switch (action.type) {
    case "MEAT": {
      return {
        ...state,
        meat: !state.meat,
      };
    }
    case "SAUSAGE": {
      return {
        ...state,
        sausage: !state.sausage,
      };
    }
    case "CHICKEN": {
      return {
        ...state,
        chicken: !state.chicken,
      };
    }
    case "BREAD": {
      return {
        ...state,
        bread: !state.bread,
      };
    }
    case "CLEAR_STATE": {
      return {
        meat: false,
        sausage: false,
        chicken: false,
        bread: false,
      };
    }
    default:
      return state;
  }
};
