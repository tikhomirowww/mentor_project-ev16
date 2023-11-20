import React from "react";
import { Navigate } from "react-router-dom";

interface IProtectedProps {
  children: React.ReactNode;
}

const AdminProtectedRoutes = ({ children }: IProtectedProps) => {
  let isAdmin = false;
  if (!isAdmin) {
    alert("You are not admin!");
    return <Navigate to="/" />;
  }
  return <div>{children}</div>;
};

export default AdminProtectedRoutes;
