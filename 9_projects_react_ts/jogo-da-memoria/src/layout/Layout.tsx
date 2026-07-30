import { Outlet } from "react-router-dom";
import { useGameContext } from "../contexts/game/useGameContext";

const Layout = () => {
  const { wins } = useGameContext();
  return (
    <div className="flex flex-col">
      <header>
        <h1 className="text-center text-2xl font-bold p-4">Jogo da Memória</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="flex justify-center mt-1">
        <p>
          Vitorias: <strong>{wins}</strong>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
