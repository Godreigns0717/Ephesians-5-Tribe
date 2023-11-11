import React from "react";
import './Contact.css'
import Navbar from "../../Navbar";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import ScrollToTopButton from "../../ScrollToTopButton";
import ContactForm from "./ContactForm";

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
                <ContactForm />
            </div>
            <ScrollToTopButton />
        </div>
    )
};
export default Contact;