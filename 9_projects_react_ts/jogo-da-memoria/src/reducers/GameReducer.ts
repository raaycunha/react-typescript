import type { ActionPayload, CardsGame, stateItem } from "../types/Game";
import { createLetters } from "../utils/Game";

export const GameReducer = (
  state: stateItem,
  action: ActionPayload,
): stateItem => {
  const flipCard = (card: CardsGame) => {
    return state.cards.map((item: CardsGame) => {
      if (item.id === card.id) return { ...item, flipped: !item.flipped };
      else return item;
    });
  };
  switch (action.type) {
    case "CARD_CLICKED": {
      const newList = flipCard(action.payload);
      if (!state.firstCard) {
        return {
          ...state,
          cards: newList,
          firstCard: action.payload,
        };
      }
      if (state.firstCard.letter === action.payload.letter) {
        return {
          ...state,
          cards: newList,
          firstCard: null,
          secondCard: null,
          pairsMade: state.pairsMade + 1,
        };
      } else {
        return {
          ...state,
          cards: newList,
          secondCard: action.payload,
          gameBlock: true,
        };
      }
    }
    case "HIDE_CARDS": {
      if (!state.firstCard && !state.secondCard) {
        return {
          ...state,
          gameBlock: false,
        };
      }
      const newList = state.cards.map((item: CardsGame) => {
        if (item.id === state.firstCard!.id || item.id === state.secondCard!.id)
          return { ...item, flipped: false };
        else return item;
      });
      return {
        ...state,
        cards: newList,
        firstCard: null,
        secondCard: null,
        gameBlock: false,
      };
    }
    case "FINISH_GAME": {
      return {
        ...state,
        gameBlock: true,
        finish: action.payload,
      };
    }
    case "RESTART_GAME": {
      return {
        cards: createLetters(),
        gameBlock: false,
        firstCard: null,
        secondCard: null,
        pairsMade: 0,
        finish: null,
      };
    }
    default:
      return state;
  }
};
