import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import baba from "../images/Sai.png";
 
const SaiBaba = () => {
    return (
        <div>
            <Header current="Baba" />
            <img src={baba} className="baba" alt="" />

            <div className="grid_3">
                <div className="box maxheight">
                    <div className="pad1">
                        <h2>Sai Baba</h2>
                        Shirdi Sai Baba was an Indian spiritual master and fakir, considered to be a saint, revered by both Hindu and Muslim devotees during and after his lifetime. According to accounts from his life, Sai Baba preached the importance of "realisation of the self" and criticised "love towards perishable things". His teachings concentrated on a moral code of love, forgiveness, helping others, charity, contentment, inner peace, and devotion to God and Guru. 
                    </div>
                </div>      
            </div>

            <div className="grid_3">
                <div className="box maxheight">
                    <div className="pad1">
                        <h2>Eleven Assurances</h2>
		                <div className="pad13">
                            <ul className="b">
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
                    </div>
                </div>      
            </div>

            <Footer />
        </div>
    );
};
 
export default SaiBaba;