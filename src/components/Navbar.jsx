import { FaTimes, FaBars,} from "react-icons/fa";
import { useRef, useState } from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

    // change nav color when scrooling
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 90 ){
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    // {/*For the navbar menu*/}
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    // {/*For the Gallery dropdown menu*/}
    const [isActiveG, setIsActiveG] = useState(false)

    // {/*For the Gallery dropdown menu*/}
    const [isActiveM, setIsActiveM] = useState(false)

    return(
        <div className="Navbar">
            <div className={color ? 'nav_bar nav_bar-bg' : 'nav_bar'}>
                <a href="/">
                    {/* <h2>E <span>5</span> T</h2> */}
                    <h2>E5T</h2>
                </a>
                <nav ref={ navRef }>
                    <h1 id="rsp-logo">E5T</h1>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/blog'>Blog</Link>

                    {/* Ministry Dropdown */}
                    <div className="dropdownM" onMouseEnter={e => setIsActiveM(!isActiveM) } onMouseLeave={e => setIsActiveM(!isActiveM)} >
                        <div className="dropdownM-btn" >
                            <Link to='/ministries'>Ministries</Link>
                            { /* <span><FaCaretDown /></span> */}
                        </div>
                        {isActiveM && (
                            <div className="dropdownM-content">
                                <div className="dropdownM-item">
                                    <a href="/online_meetings">Online</a>
                                </div>
                                <div className="dropdownM-item">
                                <a href="/the_couch">The Couch</a>
                                </div>
                                <div className="dropdownM-item">
                                    <a href="/touched">Touched</a>
                                </div>                                
                            </div>
                        )}
                    </div>

                    {/* Gallery Dropdown */}
                    <div className="dropdownG" onMouseEnter={e => setIsActiveG(!isActiveG) } onMouseLeave={e => setIsActiveG(!isActiveG)}>
                        <div className="dropdownG-btn" >
                            <Link to='/gallery'>Gallery</Link> 
                            {/* <span><FaCaretDown /></span>      */}
                        </div>
                        {isActiveG && (
                            <div className="dropdownG-content">
                                <div className="dropdownG-item">
                                    <a href=" /gallery">Gallery 1</a>
                                </div>
                                <div className="dropdownG-item">
                                <a href="/gallery">Gallery 2</a>
                                </div>
                                <div className="dropdownG-item">
                                    <a href="/gallery">Gallery 3</a>
                                </div>                                
                                <div className="dropdownG-item">
                                <a href="/gallery">Gallery 4</a>
                                </div>
                            </div>
                        )}
                    </div>
                    <Link to='/contact' id="contact">Contact Us</Link>
                    <Link to='/donate' className="donate">Donate</Link>
                    <button className="nav-btn nav-close-btn" onClick={ showNavbar }>
                       <FaTimes />   
                    </button>
                </nav>

                <button className="nav-btn nav-open-btn" onClick={ showNavbar }>
                    <FaBars />
                </button> 
            </div>
        </div>
    )
};

export default Navbar;