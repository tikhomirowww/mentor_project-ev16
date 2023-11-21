import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/auth/AuthContextsProvider";
import { notify } from "../components/Toastify";

interface IProtectedProps {
  children: React.ReactNode;
}

const AdminProtectedRoutes = ({ children }: IProtectedProps) => {
  const { isAdmin } = useAuth();
  if (!isAdmin()) {
    notify("You are not admin!", "error");
    return <Navigate to="/" />;
  }
  return <div>{children}</div>;
};

export default AdminProtectedRoutes;
