import type { ReactNode } from "react";

export interface GameProviderProps {
  children: ReactNode;
}

export type GameMode = "easy" | "normal" | "hard";
export type AttemptsProps = "decrease" | "reset";
export type WinLossProps = "win" | "loss";

export interface CardsGame {
  id: number;
  letter: string;
  flipped: boolean;
}

export interface GameContextProps {
  handleChangeMode: (value: GameMode) => void;
  attempts: number;
  decreaseAttempts: () => void;
  resetAttempts: () => void;
  increaseWins: () => void;
  wins: number;
}

export interface stateItem {
  cards: CardsGame[];
  gameBlock: boolean;
  firstCard: CardsGame | null;
  secondCard: CardsGame | null;
  pairsMade: number;
  finish: WinLossProps | null;
}

export type ActionPayload =
  | { type: "CARD_CLICKED"; payload: CardsGame }
  | { type: "HIDE_CARDS" }
  | { type: "FINISH_GAME"; payload: WinLossProps }
  | { type: "RESTART_GAME" };
