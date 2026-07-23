import { Beef } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-center items-center gap-2 py-3">
      <Beef className="text-[#f5f5f4]" size={25} />
      <h1 className="text-[#f5f5f4] text-[1.1rem] font-bold font-elms-sans md:text-2xl">
        Calculadora de Churrasco
      </h1>
    </div>
  );
};

export default Header;
