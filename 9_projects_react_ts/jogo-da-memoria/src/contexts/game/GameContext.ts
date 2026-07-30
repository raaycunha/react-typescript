import { createContext } from "react";
import type { GameContextProps } from "../../types/Game";

export const GameContext = createContext<GameContextProps | undefined>(
  undefined,
);
