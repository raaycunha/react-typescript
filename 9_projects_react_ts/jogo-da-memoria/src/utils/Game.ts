import type { CardsGame, stateItem, WinLossProps } from "../types/Game";

export const createLetters = (): CardsGame[] => {
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const duplicatedLetters = [...letters, ...letters].sort(
    () => 0.5 - Math.random(),
  );
  const cardsLetters = duplicatedLetters.map(
    (letter: string, index: number) => ({
      id: index,
      letter,
      flipped: false,
    }),
  );
  return cardsLetters;
};

export const finishGame = (state: stateItem, winLoss: WinLossProps) => {
  state.gameBlock = true;
  state.finish = winLoss;
};
