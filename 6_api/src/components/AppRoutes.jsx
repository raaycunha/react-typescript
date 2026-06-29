import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./Layout";
import AxiosPosts from "../pages/AxiosPosts";
import FetchPosts from "../pages/FetchPosts";
import PostPage from "../pages/PostPage";
import Login from "../pages/Login";
import { useAuth } from '../context/AuthContext'

const AppRoutes = () => {
  const { isLoggedIn } = useAuth()
  return (
    <div>
      <Routes>
        <Route 
          path="/" 
          element={isLoggedIn ? <Navigate to='/layout' replace /> : <Login />} 
        />
        <Route path="/layout" element={<Layout />}>
          <Route 
            path='fetch' 
            element={<FetchPosts />} 
          />
          <Route 
            path="axios" 
            element={<AxiosPosts />} 
          />
          <Route 
            path="posts-user" 
            element={<PostPage />} 
          />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
