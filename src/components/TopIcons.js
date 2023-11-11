import { React } from 'react';
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import './TopIcons.css'

const TopIcons = () => {
    return ( 
        <div className='top-icons'>
            <a href='/'>
                <FaWhatsapp className='icons' />
            </a>
            <a href='/'>
                <FaInstagram className='icons' />
            </a>
            <a href='/'>
                <FaTelegram className='icons' />
            </a>
            <a href='/'>
                <FaTwitter className='icons' />
            </a>
            <a href='/'>
                <FaFacebook className='icons' />
            </a>
        </div>
     );
}
 
export default TopIcons;