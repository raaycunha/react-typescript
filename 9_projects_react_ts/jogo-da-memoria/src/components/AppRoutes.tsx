import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Lobby from "../pages/Lobby";
import GameMemory from "../pages/GameMemory";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="lobby" replace />} />
          <Route path="lobby" element={<Lobby />} />
          <Route path="game" element={<GameMemory />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
