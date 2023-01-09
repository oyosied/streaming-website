import LoginForm from "./pages/login";
import { Route, Routes } from "react-router-dom";
import RegistrationForm from "./pages/register";
import ImageContainer from "./utils/components/Image.js"
import logo_style from "./utils/models/css_styles.js"

const App = () =>{
    let routes;
    routes = (<Routes>
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/register" element={<RegistrationForm />} />
        <Route path="*" element={<h2>Page not found</h2>} />
    </Routes>);
    return <div>
        <header><ImageContainer imageStyle={logo_style} imagePath='resting_cat.jpg'/></header>
        <main>{routes}</main>
       </div>
}

export default App;

