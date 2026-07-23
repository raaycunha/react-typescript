import { Navigate, Route, Routes } from "react-router-dom";
import Churrascaria from "../pages/Churrascaria";
import Resultado from "../pages/Resultado";
import Calculadora from "./Calculadora";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Churrascaria />}>
          <Route
            index
            element={<Navigate to="calculadora-churrasco" replace />}
          />
          <Route path="calculadora-churrasco" element={<Calculadora />} />
          <Route path="resultado-churrasco" element={<Resultado />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
