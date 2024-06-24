import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import SaiBaba from "./pages/sai-baba";
import Guruji from "./pages/guruji";
import AboutUs from "./pages/about-us";
import Archive from "./pages/archive";
import ContactUs from "./pages/contact-us";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import Error from "./pages/404"

import Login2 from "./Components/auth/login/index"
import Register from "./Components/auth/signup/index"
import { AuthProvider } from './contexts/authContext';


function App() {
  return (
   <AuthProvider>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sai-baba" element={<SaiBaba />} />
        <Route path="/guruji" element={<Guruji />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<Error />} />

         <Route path="/login-test" element={<Login2 />} />
         <Route path="/signup-test" element={<Register />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;