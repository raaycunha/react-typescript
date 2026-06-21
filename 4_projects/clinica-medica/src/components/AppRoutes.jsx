import { Navigate, Route, Routes } from "react-router-dom";
import Consultas from "../pages/Consultas";
import Financeiro from "../pages/Financeiro";
import Pacientes from "../pages/Pacientes";
import Dashboard from "./Dashboard";
import Login from "./Login";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Navigate to="consultas" replace />} />
          <Route path="consultas" element={<Consultas />} />
          <Route path="pacientes" element={<Pacientes />} />
          <Route path="financeiro" element={<Financeiro />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
