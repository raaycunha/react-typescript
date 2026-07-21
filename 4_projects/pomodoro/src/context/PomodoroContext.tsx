import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type TimerMode = "pomodoro" | "short-break" | "long-break";

interface PomodoroContextData {
  cycles: number;
  minutes: number;
  mode: TimerMode;
  setMode: (value: TimerMode) => void;
  isActive: boolean;
  setIsActive: (value: boolean) => void;
  isStarted: boolean;
  setIsStarted: (value: boolean) => void;
  advanceCycle: () => void;
  resetAllProgress: () => void;
}

const PomodoroContext = createContext<PomodoroContextData>(
  {} as PomodoroContextData,
);

export const PomodoroProvider = ({ children }: { children: ReactNode }) => {
  const [cycles, setCycles] = useLocalStorage({
    key: "cycles-pomodoro",
    initialValue: 0,
  });
  const [mode, setMode] = useState<TimerMode>("pomodoro");
  const minutes = mode === "pomodoro" ? 25 : mode === "short-break" ? 5 : 30;
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const resetAllProgress = () => {
    setCycles(0);
    setMode("pomodoro");
    setIsActive(false);
    setIsStarted(false);
  };
  const advanceCycle = () => {
    const nextCycle = cycles + 1;
    if (mode === "pomodoro") {
      if (nextCycle % 4 === 0) {
        setMode("long-break");
        setCycles(nextCycle);
      } else setMode("short-break");
    } else if (mode === "long-break") setMode("pomodoro");
    else {
      setMode("pomodoro");
      setCycles(nextCycle);
    }
  };
  useEffect(() => {
    if (cycles > 0 && cycles % 4 === 0) setMode("long-break");
  }, []);
  return (
    <PomodoroContext.Provider
      value={{
        cycles,
        minutes,
        mode,
        setMode,
        isActive,
        setIsActive,
        isStarted,
        setIsStarted,
        advanceCycle,
        resetAllProgress,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
};

export const usePomodoroContext = () => {
  return useContext(PomodoroContext);
};
