import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
 
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        
    }

    return (
        <div>
            <Header current="Account" />

    <form onSubmit={handleSubmit}>
        <fieldset>
        <legend>Login</legend>
        <div id="liveAlertPlaceholder"></div>
        <div>
            <label htmlFor="Username">Username</label>
            <input required
            type="text"
            id="username"
            name="username"
            placeholder="username"
            value={username}
            onChange={(e) => {
                setUsername(e.target.value);
            }}
            />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input required
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
                setPassword(e.target.value);
            }}
            />
        </div>
        <button type="submit">Login</button>
        </fieldset>
    </form>

    <h1 className="space">Don't have an account? </h1>
    <a href="/sign-up" className="space btn">Sign Up</a>

    <Footer />
        </div>
    );
};
 
export default Login;