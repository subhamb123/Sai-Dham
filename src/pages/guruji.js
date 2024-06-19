import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
 
const Guruji = () => {
    return (
        <div>
            <Header />
            <div className="grid_3">
                <div className="box maxheight">
                    <div className="pad1">
                        <h2>Guruji</h2>
                        Dr. Chandra Bhanu Satpathy is a noted scholar, spiritual thinker, author and a humanitarian. He is an impeccable personification of the noble principles of life such as love, empathy, compassion, simplicity, humility, devotion to God and sacrifice. As an heir to a family of great academicians and administrators, versatile young writer of his time, perfect family man, an accomplished and decorated professional, compassionate and humanitarian, an ardent devotee of his Master and a friend, philosopher and guide to millions of people across the globe, Dr. Satpathy has experienced it all with equanimity. 
                    </div>
                </div>      
            </div>

            <div className="grid_3">
                <div className="box maxheight">
                    <div className="pad1">
                        To read more about his life, journey, works and achievement, visit the official website on <a href="http://www.cbsatpathy.com">Dr. C.B. Satpathy</a>
                    </div>
                </div>      
            </div>
            <Footer />
        </div>
    );
};
 
export default Guruji;