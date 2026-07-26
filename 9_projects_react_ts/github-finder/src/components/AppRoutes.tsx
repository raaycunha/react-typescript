import { Navigate, Route, Routes } from "react-router-dom";
import { FinderProvider } from "../contexts/FinderProvider";
import GitHubFinder from "../pages/GitHubFinder";
import Layout from "../pages/Layout";
import UserRepo from "../pages/UserRepo";

const AppRoutes = () => {
  return (
    <FinderProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="github-finder" replace />} />
          <Route path="github-finder" element={<GitHubFinder />} />
          <Route path="repos/:username" element={<UserRepo />} />
        </Route>
      </Routes>
    </FinderProvider>
  );
};

export default AppRoutes;
