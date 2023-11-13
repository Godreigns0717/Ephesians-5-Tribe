import React from "react";
import TopIcons from "../../TopIcons";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import JoinWork from "../Home/Join_work";
import './TheCouch.css';

const TheCouch = () => {
    return ( 
        <div className="The-Couch">
            <TopIcons />
            <Navbar />
            <div className="Couch">
                <div className="couch_banner">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nostrum. Voluptas alias voluptatem nobis quisquam consequatur dolorum, quis modi repudiandae totam maxime ea rerum, rem necessitatibus nesciunt tempore. Consequatur, distinctio.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nostrum. Voluptas alias voluptatem nobis quisquam consequatur dolorum, quis modi repudiandae totam maxime ea rerum, rem necessitatibus nesciunt tempore. Consequatur, distinctio.
                    </p>
                    <img src="/images/BSS1-removebg-preview.png" alt="founder" />
                </div>
                <JoinWork />
                <div className="couch_location">
                    <img src="/images/image4.jpeg" alt="location" />
                    <h2><span>Location: </span>24 Adeniran Ogunsaya</h2>
                </div>
                <div className="events">
                    <div className="upcoming">

                    </div>
                    <div className="past">

                    </div>
                </div>
            </div>
            <Footer />
        </div>
     );
}
 
export default TheCouch; 