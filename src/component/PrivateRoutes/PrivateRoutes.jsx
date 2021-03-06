import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export default function PrivateRoutes(props) {
  const { user } = useContext(UserContext);
  return user ? <Route {...props} /> : <Resirect to="/" />;
}
