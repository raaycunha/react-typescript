import { useEffect, useReducer } from "react";
import { useGameContext } from "../contexts/game/useGameContext";
import { GameReducer } from "../reducers/GameReducer";
import type { CardsGame, stateItem } from "../types/Game";
import { createLetters } from "../utils/Game";

export const useGame = () => {
  const { attempts, resetAttempts, decreaseAttempts, increaseWins } =
    useGameContext();
  const stateInitial: stateItem = {
    cards: createLetters(),
    gameBlock: false,
    firstCard: null,
    secondCard: null,
    pairsMade: 0,
    finish: null,
  };
  const [state, dispatch] = useReducer(GameReducer, stateInitial);
  useEffect(() => {
    if (!state.gameBlock || state.finish) return;
    const id = setTimeout(() => {
      dispatch({
        type: "HIDE_CARDS",
      });
      decreaseAttempts();
    }, 1000);
    return () => clearTimeout(id);
  }, [state.gameBlock, state.finish, decreaseAttempts]);
  useEffect(() => {
    const id = setTimeout(() => {
      if (state.pairsMade === 8) {
        dispatch({
          type: "FINISH_GAME",
          payload: "win",
        });
        increaseWins();
      }
      if (attempts === 0) {
        dispatch({
          type: "FINISH_GAME",
          payload: "loss",
        });
      }
    }, 50);
    return () => clearTimeout(id);
  }, [state.pairsMade, attempts, increaseWins]);
  const handleLetterClick = (letterClick: CardsGame) => {
    if (state.gameBlock || letterClick.flipped) return;
    dispatch({
      type: "CARD_CLICKED",
      payload: letterClick,
    });
  };
  const restartGame = () => {
    dispatch({
      type: "RESTART_GAME",
    });
    resetAttempts();
  };
  return {
    handleLetterClick,
    cards: state.cards,
    gameBlock: state.gameBlock,
    pairsMade: state.pairsMade,
    finish: state.finish,
    attempts,
    restartGame,
  };
};
