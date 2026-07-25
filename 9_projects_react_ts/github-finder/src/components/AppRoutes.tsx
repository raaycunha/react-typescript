import { Navigate, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import GitHubFinder from "../pages/GitHubFinder";
import Layout from "../pages/Layout";
import UserRepo from "../pages/UserRepo";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="github-finder" replace />} />
          <Route path="github-finder" element={<GitHubFinder />} />
          <Route path="repos/:username" element={<UserRepo />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
