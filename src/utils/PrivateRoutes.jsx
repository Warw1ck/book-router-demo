import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/AutContext";

const PrivateWrapper = () => {
    const {user} = useContext(AuthContext)    
    return user ? <Outlet /> : <Navigate to="/login" />;
  };

export default PrivateWrapper;