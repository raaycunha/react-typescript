import { useReducer, useState } from "react";
import { CounterReducer } from "../reducers/CounterReducer";

const Counter2 = () => {
  const [counterUser, setCounterUser] = useState<string>("");
  const [state, dispatch] = useReducer(CounterReducer, 0);
  const getValueInput = () => {
    const parsed = Number(counterUser);
    return parsed > 0 ? parsed : 1;
  };
  return (
    <div className="flex flex-col gap-2 m-3">
      <h1>Contador: {state}</h1>
      <div className="flex gap-2">
        <input
          type="number"
          id="inCounter"
          placeholder="Digite seu valor"
          value={counterUser}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCounterUser(e.target.value)
          }
        />
        <button
          onClick={() => {
            const value = getValueInput();
            dispatch({
              type: "INCREMENT",
              payload: value,
            });
            setCounterUser("");
          }}
        >
          Incrementar
        </button>
        <button
          onClick={() => {
            const value = getValueInput();
            if (state === 0 || value > state) return;
            dispatch({
              type: "DECREMENT",
              payload: value,
            });
            setCounterUser("");
          }}
        >
          Decrementar
        </button>
        <button
          onClick={() => {
            if (state === 0) return;
            dispatch({
              type: "RESET",
            });
            setCounterUser("");
          }}
        >
          Resetar
        </button>
      </div>
    </div>
  );
};

export default Counter2;
