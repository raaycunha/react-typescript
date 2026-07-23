import { Outlet } from "react-router-dom";
import Container from "../components/Layout/Container";
import Header from "../components/Layout/Header";

const Churrascaria = () => {
  return (
    <div>
      <section className="w-full bg-[#120f0a] mx-auto p-2 text-gray-200 border-b-1 border-gray-200/20">
        <Container>
          <Header />
        </Container>
      </section>
      <section className="w-full bg-[#120f0a] font-pt-sans mx-auto px-4 py-2 text-gray-200">
        <Container>
          <Outlet />
        </Container>
      </section>
    </div>
  );
};

export default Churrascaria;
