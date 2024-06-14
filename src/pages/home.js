import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
 
const Home = () => {
    return (
        <div>
            <Header current="Home" />

            <div className="grid_3">
        <div className="box maxheight">

            <div className="pad1">
		<div className="title">Opening Hours</div>
		<div className="pad13">
                        <ul className="b">
                            <li>Every day from 6 PM to 9 PM</li>
                            <li>6:30 PM - Dhoop Aarati</li>
                            <li>8:30 PM - Seja Aarati</li>
                            <li>
				Sai Sandhya on every Thursday and Saturday 6:30 PM

				<ul className="b">
					<li>Sandhya Aarati</li>
		                        <li>Meditation for 15 minutes</li>
	                                <li>Recital of Sai Satcharita</li>
	                                <li>Bhajans (group music)</li>
	                                <li>Prasadam</li>
				</ul>

</li>
                        </ul>
                </div>
                <br />
                <div className="title">Temple Address</div>
                <br />
		1805 136th place NE Suite 101<br/>
		Bellevue, WA 98005<br/><br />
                
            </div>
         </div>      
    </div>

    <div className="grid_3">
        <div className="box maxheight">

            <div className="pad1">

                <div className="title">Upcoming community service events</div>
                <br />
                <ul className="b">
                <li>25th Feb - Sandwich Seva for the homeless at Tent city</li>
                <li>March/April - Blood drive</li>
                </ul>
                <br />
                <br />
                <a href="/about-us#whycharity" className="btn">Why we do it</a>
                <br />
                <br />
                <br />
                <div className="title">Upcoming cultural events</div>
                <br />
                <br />
                <ul className="b">
                {/* <a href="MahaShivaratri.jpg"><li style={{text-decoration: "underline;"}}>Maha Shivaratri and Akhand Parayan (24th Feb)</li></a> */}
                </ul>
                <br />
                <br />
                <a href="/archive" className="btn">Previous Events</a>


            </div>
        </div>
    </div>

            <Footer />
        </div>
    );
};
 
export default Home;