import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom"; 

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext); // Corrected hook
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
