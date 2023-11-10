import React from "react";
import './Contact.css'
import Navbar from "../../Navbar";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import ScrollToTopButton from "../../ScrollToTopButton";

const Contact = () => {

    return(
        <div className="Contact">
            <Navbar />
            <div className="contact-content">
                <div className="contact_cards">
                    <div className="cards card-one">
                        <p className="cnct-icons"><FaMapMarkerAlt /></p>
                        <h4>Location: <p>50 ...</p></h4>
                    </div>
                    <div className="cards card-two">
                        <p className="cnct-icons"><FaEnvelope /></p>
                        <h4>Email: <p>example@gmail.com</p></h4>
                    </div>                    
                    <div className="cards card-three">
                        <p className="cnct-icons"><FaPhone /></p>
                        <h4>Phone: <p>+234904848590</p></h4>
                    </div>
                </div>
                <div className="contact_message">
                    <form>
                        <label>Full Name</label>
                        <input type="name" placeholder="Enter Name" />
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" />
                        <label>Enter Your Message</label>
                        <input type="text" placeholder="Enter Your Message" />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
            <ScrollToTopButton />
        </div>
    )
};
export default Contact;