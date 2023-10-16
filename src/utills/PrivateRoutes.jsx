import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateWrapper = () => {
    const isAuthenticated = true;
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  };

export default PrivateWrapper;