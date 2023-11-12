import React from "react";
import './Ministries.css'
import Navbar from "../../Navbar";
import ScrollToTopButton from "../../ScrollToTopButton";
import Footer from "../../Footer";

const Ministries = () => {
    return(
        <div className="Ministries">
            <Navbar />
            <div className="ministries">
                <section className="cards online-meetings">
                    <a href="/online_meetings"><img src="images/image4.jpeg" alt="Online Meetings" /></a>
                    <a href="/online_meetings" className="text">Online Meetings</a>
                    <div className="tri"></div>
                </section>

                <section className="cards the-couch">
                    <a href="/the_couch"><img src="images/image5.jpeg" alt="The Couch" /></a>
                    <a href="/the_couch" className="text">The Couch</a>
                    <div className="tri"></div>
                </section>

                <section className="cards touched">
                    <a href="/touched"><img src="images/image6.jpeg" alt="Touched" /></a>
                    <a href="/touched" className="text">Touched</a>
                    <div className="tri"></div>
                </section>
            </div>
            <ScrollToTopButton />
            <Footer />
        </div>
    )
};

export default Ministries;