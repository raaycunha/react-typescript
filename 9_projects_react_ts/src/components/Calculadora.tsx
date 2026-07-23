import React, { useReducer, useState } from "react";
import Barbecue2 from "../assets/barbecue2-img.jpg";
import useChurrasco from "../hooks/useChurrasco";
import { ChurrascariaReducer } from "../reducers/ChurrascariaReducer";
import type { ChurrascariaState } from "../types/ContainerTypes";

const Calculadora = () => {
  const { handleChurrasco } = useChurrasco();
  const stateInitial: ChurrascariaState = {
    meat: false,
    sausage: false,
    chicken: false,
    bread: false,
  };
  const [state, dispatch] = useReducer(ChurrascariaReducer, stateInitial);
  const [people, setPeople] = useState<string>("");

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const peopleString = people.trim();
    if (peopleString.length <= 0) return;
    const peopleNumber = Number(peopleString);
    handleChurrasco(peopleNumber, state);
    dispatch({
      type: "CLEAR_STATE",
    });
    setPeople("");
  };
  return (
    <div className="flex flex-col items-between gap-6 p-2 rounded-lg">
      <form id="frm" onSubmit={handleSubmit} className="flex flex-col">
        <input
          className="w-full px-3 mb-3 border-1 border-gray-400 shadow-lg rounded-lg h-11 bg-[#ccc7bd] text-black font-bold focus:outline-1 placeholder:text-gray-450"
          type="number"
          id="people"
          placeholder="Digite a quantidade de pessoas..."
          title="Digite a quantidade de pessoas"
          value={people}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPeople(e.target.value)
          }
          required
          minLength={1}
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-[1rem] text-left font-semibold text-[#d6c6ad] md:text-xl">
            Selecione os alimentos para o churrasco:
          </h2>
          <ul className="flex flex-col gap-2 list-none">
            <div className="flex gap-1">
              <input
                type="checkbox"
                id="carne"
                checked={state.meat}
                onChange={() =>
                  dispatch({
                    type: "MEAT",
                  })
                }
              />
              <label htmlFor="carne">
                <li>Carne</li>
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="checkbox"
                id="linguica"
                checked={state.sausage}
                onChange={() =>
                  dispatch({
                    type: "SAUSAGE",
                  })
                }
              />
              <label htmlFor="linguica">
                <li>Linguiça</li>
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="checkbox"
                id="frango"
                checked={state.chicken}
                onChange={() =>
                  dispatch({
                    type: "CHICKEN",
                  })
                }
              />
              <label htmlFor="frango">
                <li>Frango</li>
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="checkbox"
                id="paoAlho"
                checked={state.bread}
                onChange={() =>
                  dispatch({
                    type: "BREAD",
                  })
                }
              />
              <label htmlFor="paoAlho">
                <li>Pão de Alho</li>
              </label>
            </div>
          </ul>
        </div>
        <button
          type="submit"
          className="bg-[#d6c6ad] text-black font-bold h-11 rounded-md mt-4 hover:bg-[#c8b393] cursor-pointer transition-transform duration-300 hover:bg-[#c8b393] hover:scale-[0.99]"
        >
          Calcular
        </button>
      </form>
      <div className="flex gap-2 w-full">
        <img
          className="rounded-lg max-w-[100%] max-h-[100%]"
          src={Barbecue2}
          alt="Churrasqueiro na churrasqueira mexendo nas carnes"
        />
      </div>
    </div>
  );
};

export default Calculadora;
