import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Barbecue3 from "../assets/barbecue3-img.jpg";
import type { CalculoState } from "../types/ContainerTypes";

const calculoInitial: CalculoState = {
  people: 0,
  meat: 0,
  sausage: 0,
  chicken: 0,
  bread: 0,
};

const Resultado = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const resultado = location.state;
  const [food, setFood] = useState<CalculoState>(calculoInitial);
  useEffect(() => {
    setFood(resultado ?? calculoInitial);
  }, [resultado]);
  return (
    <div className="flex flex-col gap-4 mt-2">
      <h2 className="text-md font-semibold text-center md:text-xl">
        Resultado do Churrasco para {food.people} pessoas
      </h2>
      <div className="flex flex-col gap-4">
        <ul className="flex flex-col gap-2 md:flex-row md:justify-center md:gap-10">
          {food.meat > 0 && <li>Carne: {food.meat} Kg</li>}
          {food.sausage > 0 && <li>Linguiça: {food.sausage} Kg</li>}
          {food.chicken > 0 && <li>Frango: {food.chicken} Kg</li>}
          {food.bread > 0 && <li>Pão de Alho: {food.bread} Un</li>}
        </ul>
      </div>
      <button
        onClick={() => {
          navigate("/calculadora-churrasco");
        }}
        className="bg-[#d6c6ad] text-black font-bold h-11 rounded-md cursor-pointer transition-transform transition-colors duration-300 hover:bg-[#c8b393] hover:scale-[0.99]"
      >
        Retornar
      </button>
      <div>
        <img
          className="rounded-lg w-full max-h-140"
          src={Barbecue3}
          alt="Churrasqueiro na churrasqueira mexendo nas carnes"
        />
      </div>
    </div>
  );
};

export default Resultado;
