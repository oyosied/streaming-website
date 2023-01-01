import LoginForm from "./pages/login";
import { Route, Routes, Navigate } from "react-router-dom";
import RegistrationForm from "./pages/register";

const App = () =>{
    let routes;
    routes = (<Routes>
        <Route path="*" element={<h2>Page not found</h2>} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/register" element={<RegistrationForm />} />
    </Routes>);
    return <main>{routes}</main>
}

export default App;