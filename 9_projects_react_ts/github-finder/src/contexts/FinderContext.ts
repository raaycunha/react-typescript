import { createContext } from "react";
import type { FinderContextData } from "../types/User";

export const FinderContext = createContext<FinderContextData | null>(null);
