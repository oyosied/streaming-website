import LoginForm from "./pages/login";
import { Route, Routes, Navigate } from "react-router-dom";
import RegistrationForm from "./pages/register";
import ImageContainer from "./utils/components/Image.js";
import logo_style from "./utils/models/css_styles.js";
import { useState } from "react";
import Home from "./pages/home";
const App = () => {
  let routes;
  const [user, setuser] = useState({ logged: false });

  routes = user.logged ? (
    <Routes>
        <Route path="*" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home/>} />
    </Routes>
  ) : (
    <Routes>
      <Route path="*" element={<Navigate to="/login" />} />
      <Route exact path="/login" element={<LoginForm setUser={setuser} />} />
      <Route exact path="/register" element={<RegistrationForm />} />
    </Routes>
  );
  return (
    <div>
      <header>
        <ImageContainer imageStyle={logo_style} imagePath="resting_cat.jpg" />
      </header>
      <main>{routes}</main>
    </div>
  );
};

export default App;
