import { useEffect, useState } from "react";
import { usePomodoroContext } from "../context/PomodoroContext";

const Timer = () => {
  const {
    minutes,
    isActive,
    setIsActive,
    setIsStarted,
    isStarted,
    advanceCycle,
  } = usePomodoroContext();
  const [secondsAmount, setSecondsAmount] = useState<number>(minutes * 60);
  const minutesAmount = Math.floor(secondsAmount / 60);
  const secondsLeft = secondsAmount % 60;
  const minutesText = String(minutesAmount).padStart(2, "0");
  const secondsText = String(secondsLeft).padStart(2, "0");
  const soundBeep = () => {
    const context = new (
      window.AudioContext || (window as any).webkitAudioContext
    )();
    const sound = context.createOscillator();
    const gain = context.createGain();
    sound.connect(gain);
    gain.connect(context.destination);
    sound.type = "sine";
    sound.frequency.value = 600;
    sound.start();
    setTimeout(() => {
      sound.stop();
    }, 500);
  };
  useEffect(() => {
    if (!isActive) return;
    if (secondsAmount <= 0) {
      soundBeep();
      setIsActive(false);
      setIsStarted(false);
      advanceCycle();
      return;
    }
    const interval = setInterval(() => {
      setSecondsAmount((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsAmount, isActive]);
  useEffect(() => {
    if (!isStarted) setSecondsAmount(minutes * 60);
  }, [isStarted, minutes]);
  useEffect(() => {
    if (isActive) document.title = `PomoScript (${minutesText}:${secondsText})`;
    else document.title = `PomoScript`;
    return () => {
      document.title = "PomoScript";
    };
  }, [secondsAmount]);
  return (
    <div className="flex items-center justify-center border-3 border-solid-[#12122B] p-5 w-full max-w-65 h-30 rounded-lg md:max-w-80 md:h-35">
      <p
        aria-label="Contador"
        className="font-orbitron font-normal text-[#12122B] text-6xl md:text-7xl"
      >{`${minutesText}:${secondsText}`}</p>
    </div>
  );
};

export default Timer;
