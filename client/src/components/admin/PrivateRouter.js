import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isLoged") === "true";
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRouter;
