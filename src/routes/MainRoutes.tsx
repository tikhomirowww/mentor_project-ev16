import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "../pages/ProductsPage";
import AuthPage from "../pages/RegisterPage";
import AddPage from "../pages/AddPage";
import AdminProtectedRoutes from "./AdminProtectedRoutes";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

const MainRoutes = () => {
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
    </Routes>
  );
};

export default MainRoutes;
