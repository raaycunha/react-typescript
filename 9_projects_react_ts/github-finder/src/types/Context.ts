import type { ReactNode } from "react";
import type { User, UserRepository } from "./User";

export interface FinderContextData {
  getUser: (user: string) => Promise<User | undefined>;
  getRepository: (user: string) => Promise<UserRepository[] | undefined>;
  isLoading: boolean;
  error: boolean;
  showError: () => void;
  clearError: () => void;
}

export interface FinderProviderProps {
  children: ReactNode;
}
