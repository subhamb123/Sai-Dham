import React from "react";
import logo from "../images/logo.png";
import Header from "../Components/Header";

import "../styles.css"
import "../css/camera.css"
import "../css/autoscroll.css"
 
const Home = () => {
    return (
        <div>
            {/* <a href="/">Home</a>
            <p></p>
            <a href="/sai-baba">Sai Baba</a>
            <p></p>
            <a href="/guruji">Guruji</a>
            <p></p>
            <a href="/about-us">About us</a>
            <p></p>
            <a href="/events">Events</a>
            <p></p>
            <a href="/resources">Resources</a>
            <p></p>
            <a href="/contact-us">Contact us</a>
            <p></p>
            <a href="/login">Login</a>
            <p></p>
            <a href="/sign-up">Sign Up</a>
            <p></p> */}

            <img src={logo} className="baba" alt="" />
            <Header current="Home" />
        </div>
    );
};
 
export default Home;