import { useContext } from "react";
import { FinderContext } from "./FinderContext";

export const useFinderContext = () => {
  const context = useContext(FinderContext);
  if (!context) {
    throw new Error("Erro ao buscar Context API");
  }
  return context;
};
