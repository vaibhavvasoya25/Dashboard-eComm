import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";

const Protected = ({ component: Cmp, ...rest }) => (
  <Routes>
    <Route
      {...rest}
      element={
        localStorage.getItem("login") ? <Cmp /> : <Navigate to="/login" />
      }
    />
  </Routes>
);

export default Protected;
