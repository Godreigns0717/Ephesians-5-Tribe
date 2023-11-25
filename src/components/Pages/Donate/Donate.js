import React from "react";
import './Donate.css'
import Navbar from "../../Navbar";
import DonationPage from "./DonationPage";

const Donate = () => {
    return(
        <div className="Donate">
            <Navbar />
            <div className="donate-card">
                <div className="donate-card_text">
                    <h2>You Can Pay Through:</h2>

                    <h3>Opay</h3>
                    <p>9117298808</p>

                    <h3>Stanbic</h3>
                    <p>9117298808</p>
                </div>
            </div>
            <DonationPage />
            <div className="donate-form">
                
            </div>
        </div>
    )
};

export default Donate;