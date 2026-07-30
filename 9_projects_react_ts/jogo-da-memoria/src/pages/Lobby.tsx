import { useNavigate } from "react-router-dom";
import { useGameContext } from "../contexts/game/useGameContext";
import type { GameMode } from "../types/Game";

const Lobby = () => {
  const navigate = useNavigate();
  const { handleChangeMode } = useGameContext();
  const changeMode = (newMode: GameMode) => {
    localStorage.setItem("mode-attempts", JSON.stringify(newMode));
    handleChangeMode(newMode);
    navigate("/game", { replace: true });
  };
  return (
    <div className="flex flex-col items-center gap-2 w-full p-2">
      <h2 className="font-semibold text-xl">Escolha a Dificuldade</h2>
      <div className="flex justify-center gap-2 w-full">
        <button
          title="15 Tentativas"
          className="bg-blue-500 text-white font-bold h-11 w-full max-w-35 rounded-lg cursor-pointer hover:bg-blue-600"
          onClick={() => changeMode("easy")}
        >
          Facil
        </button>
        <button
          title="10 Tentativas"
          className="bg-blue-500 text-white font-bold h-11 w-full max-w-35 rounded-lg cursor-pointer hover:bg-blue-600"
          onClick={() => changeMode("normal")}
        >
          Normal
        </button>
        <button
          title="06 Tentativas"
          className="bg-blue-500 text-white font-bold h-11 w-full max-w-35 rounded-lg cursor-pointer hover:bg-blue-600"
          onClick={() => changeMode("hard")}
        >
          Dificil
        </button>
      </div>
    </div>
  );
};

export default Lobby;
