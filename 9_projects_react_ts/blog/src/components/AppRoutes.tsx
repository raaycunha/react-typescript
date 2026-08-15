import { Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import NewPost from "../pages/NewPost";
import Manager from "../pages/Manager";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="new-post" element={<NewPost />} />
          <Route path="manager" element={<Manager />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
