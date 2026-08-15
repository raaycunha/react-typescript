import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header className="flex justify-between items-center py-2 px-4 bg-[#17181F] text-white font-semibold">
        <h2 className="font-bold">Blog</h2>
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="border rounded-full px-4 py-2">
              <Link to="new-post">Novo Post</Link>
            </li>
            <li>
              <Link to="manager">Gerenciar</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
