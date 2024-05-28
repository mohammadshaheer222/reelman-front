import React, { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ component: component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated)
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
