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
import Events from "./pages/events";
import Resources from "./pages/resources";
import ContactUs from "./pages/contact-us";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sai-baba" element={<SaiBaba />} />
        <Route path="/guruji" element={<Guruji />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
