import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
 
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
            <head>
    <title>Sai Parivar Foundation</title>
    <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
    <meta name="format-detection" content="telephone=no" />
    <link rel="stylesheet" href="../styles.css" />
    <link rel="stylesheet" href="css/camera.css" />
    <script src="js/jquery.js"></script>
    <script src="js/jquery-migrate-1.1.1.js"></script>
    <script src="js/script.js"></script>
    <script src="js/superfish.js"></script>
    <script src="js/jquery.ui.totop.js"></script>
    <script src="js/jquery.equalheights.js"></script>
    <script src="js/jquery.mobilemenu.js"></script>
    <script src="js/jquery.easing.1.3.js"></script>
    <script src="js/camera.js"></script>

    <script src="js/jquery.mobile.customized.min.js"></script>

    {/* <script>


        $(document).ready(function () {
            jQuery('#camera_wrap').camera({
                loader: false,
                pagination: true,
                thumbnails: false,
                height: '36.5%',
                caption: false,
                navigation: true,
                fx: 'mosaic'
            })
        });

        $(document).ready(function () {
            $().UItoTop({ easingType: 'easeOutQuart' })
        });
    </script> */}

</head>
<body className="page1">

    
<Header></Header>

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

    <footer>
        <div className="container_12">
            <h2>Jai Shri Sai</h2>
        </div>
    </footer>

</body>
        </div>
    );
};
 
export default SignUp;