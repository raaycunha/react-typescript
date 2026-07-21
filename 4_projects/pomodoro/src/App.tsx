import { PomodoroProvider } from "./context/PomodoroContext";
import Pomodoro from "./pages/Pomodoro";

function App() {
  return (
    <PomodoroProvider>
      <Pomodoro />
    </PomodoroProvider>
  );
}

export default App;
