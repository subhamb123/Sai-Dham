import React, { useEffect, useState } from "react";
 
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        
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

    <header>
        <div className="h_top">
            <div className="container_12">
                <div className="grid_12">
                    <div className="header1">
                    </div>
                </div>
            </div>
        </div>
        <div className="container_12">
            <div className="grid_12">
                <div className="menu_block">
                    <nav className="">
                        <ul className="sf-menu">
                            <li><a href="/">Home</a></li>
                            <li><a href="/sai-baba">Sai Baba</a></li>
                            <li><a href="/guruji">Guruji</a></li>
                            <li><a href="/about-us">About us</a></li>
                            <li><a href="/events">Events</a></li>
                            <li><a href="/resources">Resources</a></li>
                            <li><a href="/contact-us">Contact us</a></li>
                        </ul>
                    </nav>
                    <div className="clear"></div>
                </div>
            </div>
        </div>
       
    </header>

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

    <footer>
        <div className="container_12">
            <h2>Jai Shri Sai</h2>
        </div>
    </footer>

</body>
        </div>
    );
};
 
export default Login;