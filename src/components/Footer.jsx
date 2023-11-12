import React from "react";
import './Footer.css'
import {FaTwitter, FaWhatsapp, FaFacebook, FaInstagram, FaDiscord, FaTelegram} from "react-icons/fa";
import { Link } from 'react-router-dom'

const Footer = () => {
    return(
        <div className="footer">
            <div className='sb__footer section__padding'>
                <div className='sb__footer-links'>
                    <div className='sb__footer-links-div'>
                        <h3>Ministries</h3>
                        <Link to='/Ministries'>
                            <p>Touched</p>
                        </Link>
                        <Link to='/Ministries'>
                            <p>The Couch</p>
                        </Link>
                        <Link to='/Ministries'>
                            <p>Online Meetings</p>
                        </Link>
                    </div>
                    <div className='sb__footer-links-div'>
                        <h3>Gallery</h3>
                        <Link to='/Gallery'>
                            <p>Gallery 1</p>
                        </Link>
                        <Link to='/Gallery'>
                            <p>Gallery 2</p>
                        </Link>
                        <Link to='/Gallery'>
                            <p>Gallery 3</p>
                        </Link>
                    </div>
                    <div className='sb__footer-links-div'>
                        <h3>Convener</h3>
                        <Link to='/About'>
                            <p>Love Dr</p>
                        </Link>
                    </div>
                    <div className='sb__footer-links-div socialmedia'>
                        <h3>Social media</h3>
                        <Link to='/#'>
                            <p> Facebook <FaFacebook /></p>
                        </Link>
                        <Link to='/#'>
                            <p> Instagram <FaInstagram /></p>
                        </Link>
                        <Link to='/#'>
                            <p> Whatsapp <FaWhatsapp /></p>
                        </Link>
                        <Link to='/#'>
                            <p> Twitter <FaTwitter /></p>
                        </Link>
                        <Link to='/#'>
                            <p>Discord <FaDiscord /></p>
                        </Link>
                        <Link to='/#'>
                            <p> Telegram <FaTelegram /></p>
                        </Link>
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
                        <Link to='/'><div><p>Terms and Conditions</p></div></Link>
                        <Link to='/'><div><p>Privacy</p></div></Link>
                        <Link to='/'><div><p>Security</p></div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;