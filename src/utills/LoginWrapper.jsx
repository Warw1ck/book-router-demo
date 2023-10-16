import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const LoginWrapper = () => {
    const isAuthenticated = true;
    return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
  };

export default LoginWrapper;