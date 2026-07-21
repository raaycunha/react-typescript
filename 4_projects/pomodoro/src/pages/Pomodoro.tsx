import { Clock, Pause, Play, RotateCcw, Square } from "lucide-react";
import Timer from "../components/Timer";
import { usePomodoroContext } from "../context/PomodoroContext";

const Pomodoro = () => {
  const {
    cycles,
    mode,
    setMode,
    isActive,
    setIsActive,
    isStarted,
    setIsStarted,
    resetAllProgress,
  } = usePomodoroContext();
  type TimerMode = "pomodoro" | "short-break" | "long-break";
  const handleModeChange = (newMode: TimerMode) => {
    setMode(newMode);
    setIsActive(false);
    setIsStarted(false);
  };
  const classButton =
    "p-2 cursor-pointer transition-all duration-400 md:text-xl md:p-3";
  const textFocus = () => {
    if (mode === "pomodoro") return "Hora do foco!";
    else if (mode === "short-break") return "Hora de uma breve pausa!";
    else return "Hora de um longo descanso!";
  };
  return (
    <div className="flex flex-col gap-5 text-black">
      <header className="flex justify-center items-center gap-3 bg-[#12122B] text-white p-2 md:p-3">
        <h2 className="md:text-2xl">PomoScript</h2>
        <span>
          <Clock size={19} />
        </span>
      </header>
      <main className="flex flex-col items-center gap-5">
        <div className="flex gap-2">
          <button
            className={`flex items-center justify-center gap-4 text-white rounded-sm ${classButton} hover:bg-[#383845]
             ${mode === "pomodoro" ? "bg-[#0e0e21dc] scale-[0.95]" : "bg-[#12122B]"}`}
            onClick={() => handleModeChange("pomodoro")}
          >
            Pomodoro
          </button>
          <button
            className={`flex items-center justify-center gap-4 text-white rounded-sm ${classButton} hover:bg-[#383845]
             ${mode === "short-break" ? "bg-[#0e0e21dc] scale-[0.95]" : "bg-[#12122B]"}`}
            onClick={() => handleModeChange("short-break")}
          >
            Breve Pausa
          </button>
          <button
            className={`flex items-center justify-center gap-4 text-white rounded-sm ${classButton} hover:bg-[#383845]
             ${mode === "long-break" ? "bg-[#0e0e21dc] scale-[0.95]" : "bg-[#12122B]"}`}
            onClick={() => handleModeChange("long-break")}
          >
            Longa Pausa
          </button>
        </div>
        <div className="flex flex-col items-center gap-5 w-[100%]">
          <Timer />
          <div className="flex items-center gap-3">
            <button
              title="Zerar todo o progresso do contador"
              aria-label="Zerar todo o progresso do contador"
              onClick={resetAllProgress}
            >
              <RotateCcw
                size={35}
                className="cursor-pointer text-[#12122B] transition-all duration-400 hover:opacity-[0.5]"
              />
            </button>
            <p className="font-bold text-lg md:text-xl">{textFocus()}</p>
            <span
              className="font-bold text-xl md:text-2xl"
              aria-label="Contador de ciclos"
              title="Contador de ciclos"
            >
              #{cycles}
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            aria-label={`${isActive ? "Pausar o contador" : "Iniciar o contador"}`}
            title={`${isActive ? "Pausar o contador" : "Iniciar o contador"}`}
            className={`border-2 border-solid rounded-full ${classButton} hover:scale-[1.15]`}
            onClick={() => {
              setIsActive(!isActive);
              setIsStarted(true);
            }}
          >
            {isActive ? <Pause /> : <Play />}
          </button>
          {isStarted && (
            <button
              aria-label="Parar o contador"
              title="Parar o contador"
              className={`border-2 border-solid rounded-[50%] ${classButton} hover:scale-[1.15]`}
              onClick={() => {
                setIsStarted(false);
                setIsActive(false);
              }}
            >
              <Square />
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default Pomodoro;
