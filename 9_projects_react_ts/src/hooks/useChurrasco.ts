import { useNavigate } from "react-router-dom";
import type { CalculoState, ChurrascariaState } from "../types/ContainerTypes";

const useChurrasco = () => {
  const navigate = useNavigate();
  const handleChurrasco = (people: number, stateFood: ChurrascariaState) => {
    if (
      !stateFood.meat &&
      !stateFood.sausage &&
      !stateFood.chicken &&
      !stateFood.bread
    )
      return;
    const newCalculo: CalculoState = {
      people: people,
      meat: stateFood.meat ? (people * 200) / 1000 : 0,
      sausage: stateFood.sausage ? (people * 100) / 1000 : 0,
      chicken: stateFood.chicken ? (people * 100) / 1000 : 0,
      bread: stateFood.bread ? people * 2 : 0,
    };
    navigate("/resultado-churrasco", { state: newCalculo });
  };
  return {
    handleChurrasco,
  };
};

export default useChurrasco;
