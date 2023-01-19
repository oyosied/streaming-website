import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./utils/store/AuthContext";
import { ApiManagerProvider } from "./utils/store/ApiMangerContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ApiManagerProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </ApiManagerProvider>
  </BrowserRouter>
);
