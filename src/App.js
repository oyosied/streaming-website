import { Route, Routes, Navigate } from "react-router-dom";
import { RegistraionPage } from "./pages/RegisterPage/RegistrationPage";
import React from "react";
// eslint-disable-next-line
import { useState, useContext, useEffect } from "react";
import { HomePage } from "./pages/HomePage/HomePage";
import { UserContext } from "./utils/store/AuthContext.js";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainBody } from "./utils/components/Containers/MainBody/MainBody";
import { FullScreenVideo } from "./pages/HomePage/ContentBody/FullScreenVideo/FullScreenVideo";

const App = () => {
  const { token } = useContext(UserContext);

  return (
    <MainBody>
      {token ? (
        <Routes>
          <Route
            path="/video/:seriesId/:episodeId"
            element={<FullScreenVideo />}
          />
          <Route path="/home/*" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="*" element={<Navigate to="/login" />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegistraionPage />} />
        </Routes>
      )}
    </MainBody>
  );
};

export default App;
