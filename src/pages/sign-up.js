import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
 
const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        console.log(username);
        console.log(password);
        console.log(role);
        console.log("sdfsdf");
    }

    return (
        <div>
            <Header current="Account"/>

    <form onSubmit={handleSubmit}>
        <fieldset>
        <legend>Sign Up</legend>
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
        <div class="form-group">
            <label htmlFor="role">Role</label>
            <select name ="role" id="exampleFormControlSelect1">
                <option value="Devotee" onChange={(e) => {setRole(e.target.value)}}>Devotee</option>
                <option value="Volunteer" onChange={(e) => {setRole(e.target.value)}}>Volunteer</option>
                <option value="Aarti Volunteer" onChange={(e) => {setRole(e.target.value)}}>Aarti Volunteer</option>
                <option value="Prasadam Coordinator" onChange={(e) => {setRole(e.target.value)}}>Prasadam Coordinator</option>
                <option value="Mala Coordinator" onChange={(e) => {setRole(e.target.value)}}>Mala Coordinator</option>
            </select>
        </div>
        <button type="submit">Sign Up</button>
        </fieldset>
    </form>

    <h1 className="space">Already have an account? </h1>
    <a href="/login" className="space btn">Login</a>

    <Footer />

        </div>
    );
};
 
export default SignUp;