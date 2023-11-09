import React from "react";
import './Ministries.css'
import Navbar from "../../Navbar";
import ScrollToTopButton from "../../ScrollToTopButton";
import Footer from "../../Footer";

const Ministries = () => {
    return(
        <div className="Ministries">
            <Navbar />
            <h1>Ministries</h1>
            <ScrollToTopButton />
            <Footer />
        </div>
    )
};

export default Ministries;