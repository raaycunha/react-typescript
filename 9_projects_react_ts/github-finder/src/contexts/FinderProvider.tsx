import { useFinder } from "../hooks/useFinder";
import type { FinderProviderProps } from "../types/Context";

import { FinderContext } from "./FinderContext";

export const FinderProvider = ({ children }: FinderProviderProps) => {
  const finderHook = useFinder();
  return (
    <FinderContext.Provider value={finderHook}>
      {children}
    </FinderContext.Provider>
  );
};
