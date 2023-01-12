import LoginForm from "./pages/login";
import { Route, Routes, Navigate } from "react-router-dom";
import RegistrationForm from "./pages/register";
import React from 'react';
import { useState, useContext, useEffect } from "react";
import Home from "./pages/home";
import CenteredDiv from "./utils/components/CenteredDiv";
import { UserContext } from "./utils/store/AuthContext.js"
import {NavBar} from "./utils/components/NavBar/NavBar.js";

const App = () => {
  const { user } = useContext(UserContext);
  let routes;

  routes = user.logged ? (
    <React.Fragment>
      <CenteredDiv>
      <NavBar/>
        <Routes>
          <Route path="*" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </CenteredDiv>
    </React.Fragment>

  ) : (
    <CenteredDiv>
      <Routes>
        <Route path="*" element={<Navigate to="/login" />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/register" element={<RegistrationForm />} />
      </Routes>
    </CenteredDiv>
  );
  return (

    <React.Fragment>
      {routes}
    </React.Fragment>
  );
};

export default App;
