import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <section>
        <h1>Github Finder</h1>
      </section>
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
