import { useCallback, useEffect, useState } from "react";
import type { GameMode, GameProviderProps } from "../../types/Game";
import { GameContext } from "./GameContext";

export const GameProvider = ({ children }: GameProviderProps) => {
  const [wins, setWins] = useState<number>(() => {
    const data = localStorage.getItem("wins");
    return data ? JSON.parse(data) : 0;
  });
  const increaseWins = useCallback(() => {
    setWins((prev) => prev + 1);
  }, []);
  useEffect(() => {
    localStorage.setItem("wins", JSON.stringify(wins));
  }, [wins]);
  const [mode, setMode] = useState<GameMode>(() => {
    const data = localStorage.getItem("mode-attempts");
    return data ? JSON.parse(data) : "normal";
  });
  const [attempts, setAttempts] = useState<number>(() => {
    if (mode === "easy") return 15;
    else if (mode === "normal") return 10;
    else return 6;
  });
  const decreaseAttempts = useCallback(() => {
    setAttempts((prev) => prev - 1);
  }, []);
  const handleChangeMode = useCallback(
    (newMode: GameMode) => {
      if (newMode === "easy") setAttempts(15);
      else if (newMode === "normal") setAttempts(10);
      else setAttempts(6);
      if (mode !== newMode) setMode(newMode);
    },
    [mode],
  );
  const resetAttempts = useCallback(() => {
    handleChangeMode(mode);
  }, [handleChangeMode, mode]);
  return (
    <GameContext.Provider
      value={{
        handleChangeMode,
        attempts,
        decreaseAttempts,
        resetAttempts,
        increaseWins,
        wins,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
