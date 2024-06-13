import React from "react";
import Header from "../Components/Header";
 
 
const Resources = () => {
    return (
        <html lang="en">
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
    <script src="js/site.tree.js"></script>
    {/* <!--[if (gt IE 9)|!(IE)]><!--> */}
    <script src="js/jquery.mobile.customized.min.js"></script>
    {/* <!--<![endif]--> */}
    {/* <script>
        var data =
            [
                {
                    Name: "Content",
                    Nodes:
                        [
                            {
                                Name: "Eleven Assurances",
                                IdName: "ElevenAssurances"
                            }
                        ]
                },
                {
                    Name: "Videos",
                    Nodes:
                        [
                            {
                                Name: "Youtube Links",
                                IdName: "YoutubeLinks"
                            }
                        ]
                }
            ]
        ;

        $(document).ready(function () {
            jQuery('#camera_wrap').camera({
                loader: false,
                pagination: true,
                thumbnails: false,
                height: '36.5%',
                caption: false,
                navigation: true,
                fx: 'mosaic'
            });

            Site.Utils.CreateTree($('.tree'), data);
        });

        $(document).ready(function () {
            $().UItoTop({ easingType: 'easeOutQuart' });
        });
    </script> */}

</head>
<body className="page1">
    <Header current="Resources"></Header>

    {/* <!--=======content================================--> */}
    <div className="content">
        <div className="container_12">
            <div className="grid_3">
                <div className="box1">
                    <div id="eventsTree" className="tree">
                    </div>

                </div>
            </div>
            <div className="grid_9">
                <div className="box1">
                    <div id="eventPhotos">
                        <div id="ElevenAssurances" className="resourceDiv">
                            <ul>
                                <li>Whoever puts his feet on Shirdi soil, his sufferings would come to an end.</li>
                                <li>The wretched and miserable would rise into plenty of joy and happiness, as soon as they climb steps of my samadhi.</li>
                                <li>I shall be ever active and vigorous even after leaving this earthly body.</li>
                                <li>My tomb shall bless and speak to the needs of my devotees.</li>
                                <li>I shall be active and vigorous even from the tomb.</li>
                                <li>My mortal remains would speak from the tomb.</li>
                                <li>I am ever living to help and guide all who come to me, who surrender to me and who seek refuge in me.</li>
                                <li>If you look to me, I look to you.</li>
                                <li>If you cast your burden on me, I shall surely bear it.</li>
                                <li>If you seek my advice and help, it shall be given to you at once.</li>
                                <li>There shall be no want in the house of my devotees.</li>
                            </ul>
                        </div>
                        <div id="YoutubeLinks" className="resourceDiv">
                            <ul>
                                <li><a href="https://www.youtube.com/watch?v=N9pEN5d5_FE" target="_blank">Nov 16,2014 - Ek Shaam Shri Sai Ke Naam, Chicago</a></li>
                                <li><a href="https://www.youtube.com/watch?v=HISFK3SVHkg" target="_blank">Mar 29,2014 - Sai Sandhya Seattle</a></li>
                                <li><a href="https://www.youtube.com/watch?v=qV9mlZurQsA" target="_blank">Feb 4, 2014 - 12th Vasant Utsav, Sai ka Aangan, Gurgaon</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    </div>
    
    {/* <!--==============================footer=================================--> */}

    <footer>
        <div className="container_12">
            <h2>Jai Shri Sai</h2>
            {/* <!--<p>&copy; 2014 | <a href="www">Sai Parivar Foundation</a></p>--> */}
        </div>
    </footer>

</body>

</html>
    );
};
 
export default Resources;