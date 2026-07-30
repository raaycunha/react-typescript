import { CircleQuestionMark } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useGame } from "../hooks/useGame";
import type { CardsGame } from "../types/Game";

const GameMemory = () => {
  const {
    handleLetterClick,
    cards,
    gameBlock,
    pairsMade,
    attempts,
    finish,
    restartGame,
  } = useGame();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center w-full">
      <div className="grid grid-rows-4 grid-cols-4 gap-2">
        {cards &&
          cards.map((item: CardsGame) => (
            <div
              className={`flex justify-center items-center text-3xl font-bold p-2 rounded-lg shadow-sm shadow-black/15 
              ${
                !item.flipped
                  ? `bg-blue-500 text-white ${gameBlock ? "cursor-not-allowed" : "hover:bg-blue-600 cursor-pointer"}`
                  : "text-blue-500 bg-white cursor-not-allowed"
              }`}
              onClick={() => handleLetterClick(item)}
              key={item.id}
            >
              {!item.flipped ? <CircleQuestionMark size={40} /> : item.letter}
            </div>
          ))}
      </div>
      <div className="mt-5">
        {!finish ? (
          ""
        ) : (
          <strong
            className={`${finish === "win" ? "text-green-600" : "text-red-600"}`}
          >
            {finish === "win" ? "Você venceu!" : "Você perdeu!"}
          </strong>
        )}
      </div>
      <div className="flex items-center gap-4 mt-4">
        <div className="text-md">
          Tentativas: <strong>{attempts}</strong>
        </div>
        <div className="text-md">
          Pares feitos: <strong>{pairsMade} de 8</strong>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 w-full max-w-60">
        <button
          onClick={restartGame}
          className={`bg-blue-500 text-white font-bold h-11 w-full rounded-lg cursor-pointer hover:bg-blue-600 
            ${!finish ? "" : finish === "win" ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"}`}
        >
          Reiniciar Jogo
        </button>
        <button
          onClick={() => navigate("/lobby", { replace: true })}
          className="bg-blue-500 text-white font-bold h-11 w-full rounded-lg cursor-pointer hover:bg-blue-600"
        >
          Voltar ao Inicio
        </button>
      </div>
    </div>
  );
};

export default GameMemory;
