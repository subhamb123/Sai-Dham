import logo from './logo.svg';
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
      </Routes>
    </Router>
  );
}

export default App;
