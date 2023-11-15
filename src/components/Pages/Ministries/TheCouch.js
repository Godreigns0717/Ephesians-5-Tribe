import React from "react";
import TopIcons from "../../TopIcons";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import JoinWork from "../Home/Join_work";
import './TheCouch.css';
import { FaCalendar, FaClock } from "react-icons/fa";

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
                <div className="couch_events">
                    <div className="upcoming">
                        <h2>Next Couch Edition</h2>
                        <div className="upcoming_event one">
                            <h2 className="edition"><FaCalendar className="icons" /> Febuary Couch Edition</h2>
                            <h2>Date: <span>Febuary 23, 2024</span></h2>
                            <p className="time"><FaClock className="icons" /> 4:00pm</p>
                        </div>
                    </div>
                    <h2 className="past_event-text">Past Couch Event</h2>
                    <div className="past">
                        <div className="past_event one">
                            <img src="/images/e444203170ce51a450956a83e42f3bf6.jpg" alt="past event one" />
                            <h2>Date: <span>Febuary 23, 2024</span></h2>
                            <p><FaClock className="icons" /> 4:00pm</p>
                        </div>
                        <div className="past_event two">
                            <img src="/images/e444203170ce51a450956a83e42f3bf6.jpg" alt="past event one" />
                            <h2>Date: <span>Febuary 23, 2024</span></h2>
                            <p><FaClock className="icons" /> 4:00pm</p>
                        </div>
                        <div className="past_event three">
                            <img src="/images/e444203170ce51a450956a83e42f3bf6.jpg" alt="past event one" />
                            <h2>Date: <span>Febuary 23, 2024</span></h2>
                            <p><FaClock className="icons" /> 4:00pm</p>
                        </div>
                        <div className="past_event four">
                            <img src="/images/e444203170ce51a450956a83e42f3bf6.jpg" alt="past event one" />
                            <h2>Date: <span>Febuary 23, 2024</span></h2>
                            <p><FaClock className="icons" /> 4:00pm</p>
                        </div>
                        <div className="past_event five">
                            <img src="/images/e444203170ce51a450956a83e42f3bf6.jpg" alt="past event one" />
                            <h2>Date: <span>Febuary 23, 2024</span></h2>
                            <p><FaClock className="icons" /> 4:00pm</p>
                        </div>
                        <div className="past_event six">
                            <img src="/images/e444203170ce51a450956a83e42f3bf6.jpg" alt="past event one" />
                            <h2>Date: <span>Febuary 23, 2024</span></h2>
                            <p><FaClock className="icons" /> 4:00pm</p>
                        </div>
                        <div className="past_event seven">
                            <img src="/images/e444203170ce51a450956a83e42f3bf6.jpg" alt="past event one" />
                            <h2>Date: <span>Febuary 23, 2024</span></h2>
                            <p><FaClock className="icons" /> 4:00pm</p>
                        </div>
                        <div className="past_event eight">
                            <img src="/images/e444203170ce51a450956a83e42f3bf6.jpg" alt="past event one" />
                            <h2>Date: <span>Febuary 23, 2024</span></h2>
                            <p><FaClock className="icons" /> 4:00pm</p>
                        </div>
                        <div className="past_event nine">
                            <img src="/images/e444203170ce51a450956a83e42f3bf6.jpg" alt="past event one" />
                            <h2>Date: <span>Febuary 23, 2024</span></h2>
                            <p><FaClock className="icons" /> 4:00pm</p>
                        </div>
                        <div className="past_event ten">
                            <img src="/images/e444203170ce51a450956a83e42f3bf6.jpg" alt="past event one" />
                            <h2>Date: <span>Febuary 23, 2024</span></h2>
                            <p><FaClock className="icons" /> 4:00pm</p>
                        </div>
                        <div className="past_event eleven">
                            <img src="/images/e444203170ce51a450956a83e42f3bf6.jpg" alt="past event one" />
                            <h2>Date: <span>Febuary 23, 2024</span></h2>
                            <p><FaClock className="icons" /> 4:00pm</p>
                        </div>
                        <div className="past_event twelve">
                            <img src="/images/e444203170ce51a450956a83e42f3bf6.jpg" alt="past event one" />
                            <h2>Date: <span>Febuary 23, 2024</span></h2>
                            <p><FaClock className="icons" /> 4:00pm</p>
                        </div>
                        <div className="past_event thirteen">
                            <img src="/images/e444203170ce51a450956a83e42f3bf6.jpg" alt="past event one" />
                            <h2>Date: <span>Febuary 23, 2024</span></h2>
                            <p><FaClock className="icons" /> 4:00pm</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
     );
}
 
export default TheCouch; 