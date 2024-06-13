import React from "react";
import Header from "../Components/Header";
 
 
const ContactUs = () => {
    return (
        <html lang="en">
<head>
    <title>Sai Parivar Foundation</title>
    <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
    <meta name="format-detection" content="telephone=no" />
    <link rel="stylesheet" href="../styles.css" />
    <link rel="stylesheet" href="css/ContactUs.css" />
    <link rel="stylesheet" href="css/camera.css" />
    <link rel="stylesheet" href="css/tablegenerator.css" />
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
    <script src="js/site.tree.js"></script>
    {/* <!--<![endif]--> */}
    {/* <script>


        $(document).ready(function () {
            $('#mobiledetail').toggle();
            $('#donationdetail').toggle();
	    $('#divMonth').toggle();
            jQuery('#camera_wrap').camera({
                loader: false,
                pagination: true,
                thumbnails: false,
                height: '36.5%',
                caption: false,
                navigation: true,
                fx: 'mosaic'
            });
        });

        $(document).ready(function () {
            $().UItoTop({ easingType: 'easeOutQuart' });
        });

        $('#arati').live("click", function () {
            if (!$(this).hasclassName('selected')) {
		if ($('#donation').hasclassName('selected')) {
                    $('#divMonth').toggle();
                    $('#month').attr("required", false);
                    $('#donationdetail').toggle();
                 }
                if ($('#temple').hasclassName('selected')) {
                    $('#mobiledetail').toggle();
                 }
                    $('#temple').removeclassName("selected");
                    $('#donation').removeclassName("selected");
                    $(this).addclassName("selected");
                    $('#subject').val("Arati Registration");
                }
        });

        $('#temple').live("click", function () {
            if (!$(this).hasclassName('selected')) {
                if ($('#donation').hasclassName('selected')) {
                    $('#divMonth').toggle();
                    $('#month').attr("required", false);
                    $('#donationdetail').toggle();
                }
                $('#arati').removeclassName("selected");
                $('#donation').removeclassName("selected");
                $(this).addclassName("selected");
                $('#mobiledetail').toggle();
                $('#subject').val("Mobile Registration");
            }
        });

        $('#donation').live("click", function () {
            if (!$(this).hasclassName('selected')) {
                if ($('#temple').hasclassName('selected')) {
                    $('#mobiledetail').toggle();

                }
                $('#arati').removeclassName("selected");
                $('#temple').removeclassName("selected");
                $(this).addclassName("selected");
                $('#divMonth').toggle();
                $('#month').attr("required", true);

                $('#donationdetail').toggle();
                $('#subject').val("Monthly Charitable Volunteering Registration");
            }
        });
    </script> */}

</head>
<body className="page1">
<Header current="Contact us"></Header>
    {/* <!--=======content================================--> */}
    <div className="content">
        <div className="container_12">
            
            <div className="grid_12">
                <br />
                <ul className="tabrow">
                    <li className="selected" id="arati">Arati Registration</li>
                    <li id="donation">Monthly Charitable Volunteering Registration</li>
                </ul>
                <br />
            </div>

        </div>

        {/* <!-- *************************** --> */}

        <div className="container_12">

            <div className="grid_12" id="donationdetail">
                        Please let us know if you are interested in participating in our monthly charitable activities.  We do a monthly food and clothes drive for the needy every 2nd Sunday of each month. You can participate in the following way either for a month or few months or on long term basis:
                        <br />
                            <ul className="b">
                                <li>You may provide food and drop off at the temple</li>
                                <li>You may donate clothes</li>
                                <li>You may volunteer to drive and deliver</li>
                                <li>or sign up for all</li>
                            </ul>
                <br />
            </div>

            <div className="grid_12">

                <div id="form-main">
                    <div id="form-div">
                        <form className="form" action="mail.php" method="POST" id="form1">

                            <p className="name">
                                <input name="name" type="text" className="validate[required,custom[ ],length[0,100]] feedback-input" placeholder="Name" id="name" required />
                            </p>
                            <p className="email">
                                <input name="email" type="text" className="validate[required,custom[email]] feedback-input" id="email" placeholder="Email" required />
                            </p>
                            <p className="phone">
                                <input name="phone" type="text" className="validate[required,custom[phone]] feedback-input" id="phone" placeholder="Phone" required />
                            </p>
<div id="divMonth">
                            <p className="month">
                                <input name="month" type="text" className="validate[required,custom[],length[0,20]] feedback-input" id="month" placeholder="Month" />
                            </p>
</div>
                            <p className="text">
                                <textarea name="comment" className="validate[required,length[8,1000]] feedback-input" id="comment" placeholder="Comment" required></textarea>
                            </p>
                            <input id="subject" name="subject" type="hidden" value="Arati Registration" />

                            <div className="submit">
                                <input type="submit" value="Submit" id="button-blue" />
                                <div className="ease"></div>
                            </div>

                        </form>

                    </div>
                    <br />
                </div>

                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br />

            </div>
            {/* <!-- ********************* --> */}

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
 
export default ContactUs;