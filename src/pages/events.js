import React from "react";
import Header from "../Components/Header";
 
 
const Events = () => {
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
                    Name: "Charitable Events",
                    Nodes:
                        [
                            {
                                Name: "Clothes Drive",
                                Images:
                                        [
                                            { Name: "0.jpg" },
                                            { Name: "1.jpg" },
                                        ]
                            },
                            {
                                Name: "Food Drive",
                                Images:
                                        [
                                            { Name: "0.jpg" },
                                            { Name: "1.jpg" },
                                        ]
                            },
                            {
                                Name: "Food drive (8th Oct 2016)",
                                Images:
                                        [
                                            { Name: "FD1.jpeg" },
                                            { Name: "FD2.jpg" },
                                            { Name: "FD3.jpg" },
                                        ]
                            },
                            {
                                Name: "Clothes drive (30th Oct 2016)",
                                Images:
                                        [
                                            { Name: "IMG_0140.JPG" },
                                            { Name: "IMG_0142.JPG" },
                                            { Name: "IMG_0143.JPG" },
                                            { Name: "IMG_0144.JPG" },
                                            { Name: "IMG_0145.JPG" },
                                        ]
                            },
                            {
                                Name: "Northwest Harvest",
                                Images:
                                        [
                                            { Name: "20161112.jpg" },
                                            { Name: "20161210.jpg" },
                                            { Name: "20170114.jpg" },
                                            { Name: "20170211.jpg" },
                                            { Name: "20170311.jpg" },
                                        ]
                            },
                            {
                                Name: "Sandwich Seva (25th Nov 2016)",
                                Images:
                                        [
                                            { Name: "0.jpg" },
                                            { Name: "1.jpg" },
                                            { Name: "2.jpg" },
                                            { Name: "3.jpg" },
                                        ]
                            },
                            {
                                Name: "Food drive (24th Dec 2016)",
                                Images:
                                        [
                                            { Name: "1.jpg" },
                                            { Name: "2.jpg" },
                                        ]
                            },
                            {
                                Name: "Sandwich Seva (25th Feb 2017)",
                                Images:
                                        [
                                            { Name: "1.jpg" },
                                            { Name: "2.jpg" },
                                            { Name: "3.jpg" },
                                            { Name: "4.jpg" },
                                            { Name: "5.jpg" },
                                            { Name: "6.jpg" },
                                        ]
                            },
                            {
                                Name: "Food Drive (25th Mar 2017)",
                                Images:
                                        [
                                            { Name: "1.jpg" },
                                            { Name: "2.jpg" },
                                            { Name: "3.jpg" },
                                            { Name: "4.jpg" },
                                        ]
                            },

                        ]
                },
                {
                    Name: "Cultural Events",
                    Nodes:
                        [
                            {
                                Name: "2015",
                                Images:
                                        [
                                            { Name: "1.jpg" },
                                            { Name: "2.jpg" },
                                            { Name: "3.jpg" },
                                            { Name: "4.jpg" },
                                            { Name: "5.jpg" },
                                            { Name: "6.jpg" },
                                        ]
                            },
                            {
                                Name: "2016",
                                Images:
                                        [
                                            { Name: "DSC_4989.JPG" },
                                            { Name: "DSC_5074.JPG" },
                                            { Name: "DSC_5091.JPG" },
                                            { Name: "DSC_5107.JPG" },
                                            { Name: "DSC_5133.JPG" },
                                            { Name: "DSC_6528.JPG" },
                                            { Name: "DSC_6570.JPG" },
                                            { Name: "DSC_6574.JPG" },
                                            { Name: "DSC_6632.JPG" },
                                            { Name: "DSC_6683.JPG" },
                                            { Name: "DSC_6854.JPG" },
                                            { Name: "DSC_6860.JPG" },
                                            { Name: "DSC_6910.JPG" },
                                        ]
                            },
                        ]
                }, 
                {
                    Name: "Temple Events",
                    Nodes:
                        [
                         {
                            Name: "2016",
                            Nodes:
                                    [
                                        {
                                            Name: "Temple Opening (4th Sept)",
                                            Images:
                                                [
                                                    { Name: "DSC_6178.jpg" },
                                                    { Name: "DSC_6190.jpg" },
                                                    { Name: "DSC_6195.jpg" },
                                                    { Name: "DSC_6201.jpg" },
                                                    { Name: "DSC_6209.jpg" },
                                                    { Name: "DSC_6250.jpg" },
                                                    { Name: "DSC_6291.jpg" },
                                                ]
                                        },
                                        {
                                            Name: "Sai Sandhya (22nd Sept)",
                                            Images:
                                                [
                                                    { Name: "DSC_6311.JPG" },
                                                    { Name: "DSC_6312.JPG" },
                                                    { Name: "DSC_6314.JPG" },
                                                    { Name: "DSC_6315.JPG" },
                                                    { Name: "DSC_6317.JPG" },
                                                    { Name: "DSC_6321.JPG" },
                                                    { Name: "DSC_6322.JPG" },
                                                ]
                                        },
                                        {
                                            Name: "Sai Sandhya and Shej Arati (6th Oct)",
                                            Images:
                                                [
                                                    { Name: "DSC_6329.JPG" },
                                                    { Name: "DSC_6330.JPG" },
                                                    { Name: "DSC_6331.JPG" },
                                                    { Name: "DSC_6333.JPG" },
                                                    { Name: "DSC_6337.JPG" },
                                                    { Name: "DSC_6345.JPG" },
                                                    { Name: "DSC_6348.JPG" },
                                                ]
                                        },
                                        {
                                            Name: "Dussera (9th Oct - 11th Oct)",
                                            Images:
                                                [
                                                    { Name: "DSC_6484.JPG" },
                                                    { Name: "DSC_6500.JPG" },
                                                    { Name: "DSC_6509.JPG" },
                                                    { Name: "DSC_6514.JPG" },
                                                    { Name: "DSC_6519.JPG" },
                                                    { Name: "DSC_6520.JPG" },
                                                    { Name: "DSC_6525.JPG" },
                                                    { Name: "DSC_6542.JPG" },
                                                ]
                                        },
                                        {
                                            Name: "Diwali (29th & 30th Oct)",
                                            Images:
                                                [
                                                    { Name: "DSC_6614.JPG" },
                                                    { Name: "DSC_6622.JPG" },
                                                    { Name: "DSC_6632.JPG" },
                                                    { Name: "DSC_6660.JPG" },
                                                    { Name: "DSC_6677.JPG" },
                                                    { Name: "DSC_6698.JPG" },
                                                ]
                                        },

                                    ]
                          },			    
                          {
                            Name: "2017",
                            Nodes:
                                    [
                                        {
                                            Name: "Maha Shivaratri (24th Feb)",
                                            Images:
                                                [
                                                    { Name: "1.JPG" },
                                                    { Name: "2.JPG" },
                                                    { Name: "3.JPG" },
                                                    { Name: "4.JPG" },
                                                    { Name: "5.JPG" },
                                                    { Name: "6.JPG" },
                                                    { Name: "7.JPG" },
                                                    { Name: "8.JPG" },
                                                ]
                                        },
                                    ]
                        }
                        ]
                },
                {
                    Name: "Bellevue Events",
                    Nodes:
                        [
                        {
                            Name: "2016",
                            Nodes:
                                    [
                                        {
                                            Name: "Arati(Feb)",
                                            Images:
                                                [
                                                    { Name: "0.jpg" },
                                                    { Name: "1.jpg" },
                                                    { Name: "2.jpg" },
                                                    { Name: "3.jpg" },
                                                    { Name: "4.jpg" },
                                                    { Name: "5.jpg" },
                                                    { Name: "6.jpg" },
                                                    { Name: "7.jpg" },
                                                ]
                                        },

                                    ]
                        },
                        {
                            Name: "2015",
                            Nodes:
                                    [
                                        {
                                            Name: "Arati(Oct)",
                                            Images:
                                                [
                                                    { Name: "1.JPG" },
                                                    //{ Name: "2.JPG" },
                                                    //{ Name: "3.JPG" },
                                                    //{ Name: "4.JPG" },
                                                    //{ Name: "5.JPG" },
                                                    //{ Name: "6.JPG" },
                                                    { Name: "7.JPG" },
                                                    { Name: "8.JPG" },
                                                    { Name: "9.JPG" },
                                                    { Name: "10.JPG" },
                                                    { Name: "11.JPG" },
                                                    { Name: "12.JPG" },
                                                ]
                                        },
                                        {
                                            Name: "Arati(Sep)",
                                            Images:
                                                [
                                                    { Name: "1.jpg" },
                                                    //{ Name: "2.jpg" },
                                                    //{ Name: "3.jpg" },
                                                    { Name: "4.jpg" },
                                                    { Name: "6.jpg" },
                                                    { Name: "7.jpg" },
                                                ]
                                        },
                                        {
                                            Name: "Arati(Aug)",
                                            Images:
                                                [
                                                    { Name: "1.jpg" },
                                                    //{ Name: "2.jpg" },
                                                    //{ Name: "3.jpg" },
                                                    //{ Name: "4.jpg" },
                                                    { Name: "5.jpg" },
                                                    { Name: "6.jpg" },
                                                    { Name: "7.jpg" },
                                                    { Name: "8.jpg" },
                                                    { Name: "9.jpg" },
                                                    { Name: "10.jpg" },
                                                    { Name: "11.jpg" },
                                                ]
                                        },
                                        {
                                            Name: "GuruPurnima(July)",
                                            Images:
                                                [
                                                    { Name: "1.jpg" },
                                                    { Name: "2.jpg" },
                                                    { Name: "3.jpg" },
                                                    { Name: "4.jpg" },
                                                    { Name: "5.jpg" },
                                                    { Name: "6.jpg" },
                                                    { Name: "7.jpg" },
                                                    { Name: "8.jpg" },
                                                    { Name: "9.jpg" },
                                                    { Name: "10.jpg" },
                                                    { Name: "11.jpg" },
                                                    { Name: "12.jpg" },
                                                    { Name: "13.jpg" },
                                                    { Name: "14.jpg" },
                                                    { Name: "15.jpg" },
                                                ]
                                        },
                                        {
                                            Name: "Arati(July)",
                                            Images:
                                                [
                                                    { Name: "IMG_1329.jpg" },
                                                    { Name: "IMG_1331.jpg" },
                                                    { Name: "IMG_1400.jpg" },
                                                    //{ Name: "IMG_1402.jpg" },
                                                    //{ Name: "IMG_1403.jpg" },
                                                    //{ Name: "IMG_1414.jpg" },
                                                    //{ Name: "IMG_1415.jpg" },
                                                    //{ Name: "IMG_1421.jpg" },
                                                    //{ Name: "IMG_1424.jpg" }
                                                ]
                                        },
                                        {
                                            Name: "Arati(June)",
                                            Images:
                                                [
                                                    //{ Name: "DSC_0002.jpg" },
                                                    //{ Name: "DSC_0003.jpg" },
                                                    //{ Name: "DSC_0005.jpg" },
                                                    //{ Name: "DSC_0006.jpg" },
                                                    //{ Name: "DSC_0007.jpg" },
                                                    //{ Name: "DSC_0008.jpg" },
                                                    //{ Name: "DSC_0010.jpg" },
                                                    //{ Name: "DSC_0012.jpg" },
                                                    //{ Name: "DSC_0013.jpg" },
                                                    { Name: "DSC_0014.jpg" },
                                                    { Name: "DSC_0016.jpg" },
                                                    { Name: "DSC_0018.jpg" },
                                                    { Name: "DSC_0019.jpg" }
                                                ]
                                        },
                                        {
                                            Name: "Arati(May)",
                                            Images:
                                                [
                                                    { Name: "IMG_0001.jpg" },
                                                    { Name: "IMG_00807.jpg" },
                                                    { Name: "IMG_00828.jpg" },
                                                    { Name: "IMG_0837.JPG" },
                                                    { Name: "IMG_0839.JPG" },
                                                    { Name: "IMG_0840.JPG" },
                                                    { Name: "IMG_0842.JPG" },
                                                    { Name: "IMG_0846.JPG" }

                                                ]
                                        },
                                        {
                                            Name: "Arati(April)",
                                            Images:
                                                [
                                                    { Name: "DSC_0547.JPG" },
                                                    { Name: "DSC_0552.JPG" },
                                                    { Name: "DSC_0537.JPG" },
                                                    //{ Name: "DSC_0508.JPG" },
                                                    //{ Name: "DSC_0519.JPG" },
                                                    //{ Name: "DSC_0522.JPG" }
                                                ]
                                        },
                                        {
                                            Name: "Palki(April)",
                                            Images:
                                                [
                                                    { Name: "DSC_0386.JPG" },
                                                    { Name: "DSC_0390.JPG" },
                                                    { Name: "DSC_0394.JPG" },
                                                    { Name: "DSC_0429.JPG" },
                                                    { Name: "DSC_0440.JPG" },
                                                    { Name: "DSC_0469.JPG" },
                                                    { Name: "DSC_0479.JPG" },
                                                    { Name: "DSC_0484.JPG" },
                                                    { Name: "DSC_0491.JPG" },
                                                    { Name: "DSC_0505.JPG" },
                                                ]
                                        },
                                        {
                                            Name: "Ramnavami(Mar)",
                                            Images:
                                                [
                                                    { Name: "DSC_001.jpg" },
                                                    { Name: "DSC_002.jpg" },
                                                    { Name: "DSC_003.jpg" },
                                                    { Name: "DSC_004.jpg" },
                                                    { Name: "DSC_005.jpg" },
                                                    { Name: "DSC_006.jpg" },
                                                    { Name: "DSC_007.jpg" },
                                                    { Name: "DSC_008.jpg" },
                                                    { Name: "DSC_009.jpg" },
                                                    //{ Name: "DSC_101.jpg" },
                                                ]
                                        },
                                        {
                                            Name: "Jan",
                                            Images:
                                                [
                                                    { Name: "Baba_Feb - Copy.jpg" },
                                                    { Name: "DSC07253.jpg" },
                                                    { Name: "DSC07253.jpg" },


                                                ]
                                        }

                                    ]
                        },
                        {
                            Name: "2014",
                            Nodes:
                                    [
                                        {
                                            Name: "Dec",
                                            Images:
                                                [
                                                    { Name: "WP_20141227_024.jpg" },
                                                    { Name: "WP_20141227_033.jpg" },
                                                    { Name: "WP_20141227_041.jpg" },
                                                    { Name: "WP_20150101_039.jpg" },
                                                ]
                                        },
                                        {
                                            Name: "Nov",
                                            Images:
                                                [
                                                    { Name: "DSC_0308.jpg" },
                                                    { Name: "DSC_0314.jpg" },
                                                    
                                                ]
                                        },
                                        {
                                            Name: "Oct",
                                            Images:
                                                [
                                                    { Name: "DSC_0673.jpg" },
                                                    { Name: "DSC_0677.jpg" },
                                                    { Name: "DSC_0770.jpg" },

                                                ]
                                        },
                                    ]
                        }
                        ]
                },
                {
                    Name: "Other Events",
                    Nodes:
                        [
                            {
                                Name: "Chicago Event",
                                Images:
                                        [
                                            { Name: "WP_20141116_014.jpg" },
                                            
                                        ]
                            }
                        ]
                }

            ]
            ;

        var eventimagefolder = "EventImages";

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
    
    
<Header current="Events"></Header>

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
                    </div>

                </div>
            </div>
                <div className="grid_12">
                    

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
 
export default Events;