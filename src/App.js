import { Route, Routes, Navigate } from "react-router-dom";
import { RegistraionPage } from "./pages/RegisterPage/RegistrationPage";
import React from "react";
import { useState, useContext, useEffect } from "react";
import { HomePage } from "./pages/HomePage/HomePage";
import { UserContext } from "./utils/store/AuthContext.js";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainBody } from "./utils/components/Containers/MainBody/MainBody";

const App = () => {
  const { user } = useContext(UserContext);
  let routes;

  routes = user.logged ? (
    <React.Fragment>
      <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </React.Fragment>
  ) : (
    <Routes>
      <Route path="*" element={<Navigate to="/login" />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/register" element={<RegistraionPage />} />
    </Routes>
  );
  return <MainBody>{routes}</MainBody>;
};

export default App;
