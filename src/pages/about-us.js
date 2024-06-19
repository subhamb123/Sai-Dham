import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
 
const AboutUs = () => {
    return (
        <div>
            <Header />

            <div className="grid_3">
                <div className="box maxheight">
                    <div className="pad1">
                        <h2>Our Mission:</h2>
                        <h6>
                            <br/>
                            
                            <ul class="b">
                                <li>To spread Shirdi Sai Baba’s philosophy and teachings, Shraddha (devotion) and Saburi (patience).</li>
                                <ul class="c">
                                    <li>The Sai Age and be a part of Sai-ism, as He is the Master of the Age.</li>
                                    <li>Spread the message of love, purity and sanctifying the lives in the service of Lord Shirdi Sai. </li>
                                    <li>To promote qualities of humankind’s ideals of quality, coexistence, selflessness, and extend a helping hand to the poor and the needy in times of distress</li>
                                </ul>
                                
                            </ul>

                            <br/>
                            <ul class="b">
                                <li>To make people aware of our revered Guruji Shri C. B. Satpathy’s teachings, work, events on the Global Sai movement.</li>
                                <li>To extend our hands of compassion to the needy in the society by participating in charitable activities and community services.</li>
                                <li>To promote cultural activities in the community.</li>
                            </ul>
                        </h6>
                    </div>
                </div>      
            </div>

            <div className="grid_3">
                <div className="box maxheight">
                    <div className="pad1">
                        <h2>What we do:</h2>
                        <h6>
                            <br/>
                            <ul class="b">
                                <li>Daily Aarti (Every Thursday and Saturday, we also hold a Sai Sandhya with Baba’s Aarati followed by a meditation session at the temple. The atmosphere in our temple is wonderful. After Baba’s Sandhya Aarati, we play Baba’s devotional songs. Each of our songs is a prayer in itself and sometimes the lyrics move the heart and soul as they endeavour to heal and inspire us from within and become better human beings.</li>
                                <li>Bi-weekly Parayan/Satsang (First and Third Thursday evenings of every month) – We hold recital sessions on “Guru Bhagawat” or “Sai Satcharitra” as well discuss and exchange learning from Baba’s teachings.</li>
                                <li>We do food and clothes drives to help distribute among the poor and needy</li>
                            </ul>
                        </h6>
                    </div>
                </div>      
            </div>

            <Footer />
        </div>
    );
};
 
export default AboutUs;