import { Outlet } from "react-router-dom";

const Layout = () => {
  const classLayout =
    "w-full max-w-[768px] lg:max-w-[1200px] mx-auto bg-[#010409] text-white/90 rounded-xl m-2";
  return (
    <div className="px-2">
      <section
        className={`${classLayout} text-lg font-bold text-center p-2 shadow-sm shadow-white/2 md:text-4xl md:p-4`}
      >
        <h1>Github Finder</h1>
      </section>
      <section className={`${classLayout} px-2 py-4 md:p-6 w-full`}>
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
