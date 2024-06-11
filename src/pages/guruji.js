import React from "react";
import Header from "../Components/Header";
 
 
const Guruji = () => {
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
    {/* <!--[if (gt IE 9)|!(IE)]><!--> */}
    <script src="js/jquery.mobile.customized.min.js"></script>
    {/* <!--<![endif]--> */}
    {/* <script>


        $(document).ready(function () {
            jQuery('#camera_wrap').camera({
                loader: false,
                pagination: true,
                thumbnails: false,
                height: '43%',
                caption: false,
                navigation: true,
                portrait: true,
                time: 2000,
                transPeriod:1000,
                fx: 'mosaic'
            })
        });

        $(document).ready(function () {
            $().UItoTop({ easingType: 'easeOutQuart' })
        });
    </script> */}

</head>
<body className="page1">
    
<Header current="Guruji"></Header>

    <div className="container_12">
         <div className="slider_wrapper">
              <div id="camera_wrap" className="">
                <div data-src="images/GuruJi/GuruJi1.jpg"></div>
                <div data-src="images/GuruJi/GuruJi2.jpg"></div>
                <div data-src="images/GuruJi/GuruJi3.jpg"></div>
                <div data-src="images/GuruJi/GuruJi4.jpg"></div>
                <div data-src="images/GuruJi/GuruJi5.jpg"></div>
                <div data-src="images/GuruJi/GuruJi6.jpg"></div>
                <div data-src="images/GuruJi/GuruJi7.jpg"></div>
                <div data-src="images/GuruJi/GuruJi8.jpg"></div>
                <div data-src="images/GuruJi/GuruJi9.jpg"></div>
                <div data-src="images/GuruJi/GuruJi10.jpg"></div>
                <div data-src="images/GuruJi/GuruJi11.jpg"></div>
                <div data-src="images/GuruJi/GuruJi12.jpg"></div>
                <div data-src="images/GuruJi/GuruJi13.jpg"></div>
                <div data-src="images/GuruJi/GuruJi14.jpg"></div>
              </div>
        </div>
     </div>
    {/* <!--=======content================================--> */}
    <div className="content">
        <div className="container_12">

            <div className="grid_12">
                <br />
                    {/* <!--<img src="Saiimages/guruji.jpg" style="float:left; width:auto; height:auto;vertical-align: middle;padding:10px 10px 10px;">--> */}

                  
                <h6>
                    Dr. Chandra Bhanu Satpathy is a noted scholar, spiritual thinker, author and a humanitarian. He is an impeccable personification of the noble principles of life such as love, empathy, compassion, simplicity, humility, devotion to God and sacrifice. As an heir to a family of great academicians and administrators, versatile young writer of his time, perfect family man, an accomplished and decorated professional, compassionate and humanitarian, an ardent devotee of his Master and a friend, philosopher and guide to millions of people across the globe, Dr. Satpathy has experienced it all with equanimity.
                    <br /><br />
                    As he holds, the year 1989 marked a turning point in his life when he visited the Holy Shrine of Shri Sai Baba located in Shirdi (Maharashtra). Ever since, Dr. Satpathy has been spreading the teachings of Shri Shirdi Sai and Indian philosophy assiduously over a span of 25 years, not only in India but other countries as well. Under his inspiration and guidance, more than two hundred centers and forums devoted to philanthropy, community development, spiritualism and promotion of Indian culture, are active in countries like India, USA, Canada, Australia, New Zealand, South Africa, UK and some other countries in Europe.
                    <br /><br />
                    To read more about his life, journey, works and achievement, visit the official website on <a href="http://www.cbsatpathy.com" style={{"text-decoration": "underline"}}>Dr. C.B. Satpathy</a>                
                </h6>
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
 
export default Guruji;