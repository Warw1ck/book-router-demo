import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const LoginWrapper = ({isAuthenticated}) => {
    
    return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
  };

export default LoginWrapper;