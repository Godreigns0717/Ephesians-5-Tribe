import React from "react";
import './Footer.css'
import {FaTwitter, FaWhatsapp, FaFacebook, FaInstagram, FaDiscord, FaTelegram} from "react-icons/fa";

const Footer = () => {
    return(
        <div className="footer">
            <div className='sb__footer section__padding'>
                <div className='sb__footer-links'>
                    <div className='sb__footer-links-div'>
                        <h3>Ministries</h3>
                        <a href='/#'>
                            <p>Touched</p>
                        </a>
                        <a href='/#'>
                            <p>The Couch</p>
                        </a>
                        <a href='/#'>
                            <p>Online Meetings</p>
                        </a>
                    </div>
                    <div className='sb__footer-links-div'>
                        <h3>Gallery</h3>
                        <a href='/#'>
                            <p>Gallery 1</p>
                        </a>
                        <a href='/#'>
                            <p>Gallery 2</p>
                        </a>
                        <a href='/#'>
                            <p>Gallery 3</p>
                        </a>
                    </div>
                    <div className='sb__footer-links-div'>
                        <h3>Head</h3>
                        <a href='/#'>
                            <p>Love Dr</p>
                        </a>
                    </div>
                    <div className='sb__footer-links-div socialmedia'>
                        <h3>Social media</h3>
                        <a href='/#'>
                            <p> Facebook <FaFacebook /></p>
                        </a>
                        <a href='/#'>
                            <p> Instagram <FaInstagram /></p>
                        </a>
                        <a href='/#'>
                            <p> Whatsapp <FaWhatsapp /></p>
                        </a>
                        <a href='/#'>
                            <p> Twitter <FaTwitter /></p>
                        </a>
                        <a href='/#'>
                            <p>Discord <FaDiscord /></p>
                        </a>
                        <a href='/#'>
                            <p> Telegram <FaTelegram /></p>
                        </a>
                    </div>
                </div>

                <hr></hr>
                
                <div className='sb__footer-below'>
                    <div className='sb__footer-copyright'>
                        <p>
                            @{new Date().getFullYear()} Ephesians 5 tribe. All right resevered
                        </p>
                    </div>
                    <div className='sb__footer-links'>
                        <a href='/#'><div><p>Terms and Conditions</p></div></a>
                        <a href='/#'><div><p>Privacy</p></div></a>
                        <a href='/#'><div><p>Security</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer