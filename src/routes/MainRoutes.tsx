import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "../pages/ProductsPage";
import AddPage from "../pages/AddPage";
import AdminProtectedRoutes from "./AdminProtectedRoutes";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import { useAuth } from "../contexts/auth/AuthContextsProvider";
import EditPage from "../pages/EditPage";

const MainRoutes = () => {
  const { isAdmin } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/add"
        element={
          <AdminProtectedRoutes>
            <AddPage />
          </AdminProtectedRoutes>
        }
      ></Route>
      <Route path="/edit/:id" element={isAdmin() ? <EditPage /> : null} />
    </Routes>
  );
};

export default MainRoutes;
