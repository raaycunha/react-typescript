import { useContext } from "react";
import { GameContext } from "./GameContext";

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error("Context API não encontrado!");
  return context;
};
