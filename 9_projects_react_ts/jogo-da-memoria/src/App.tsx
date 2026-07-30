import AppRoutes from "./components/AppRoutes";
import { GameProvider } from "./contexts/game/GameProvider";

function App() {
  return (
    <GameProvider>
      <AppRoutes />
    </GameProvider>
  );
}

export default App;
