import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import './ConvernerInfo.css'
import { FaFacebook, FaInstagram, FaTelegram, FaTiktok, FaTimes, FaTree} from 'react-icons/fa';
// import Image from '../../../../public/images/image1.jpeg'; // Replace with your convenor image path

const ConvenerInfo = () => {

  const [isActive, setIsActive] = useState(false)

  return (
    <div className="convener-info">
      <h2>Our Convener</h2>
      <div className='content'>
        <div className='image-background'>
          <img src='/images/YYG_1_-removebg-preview.png' alt="Convenor" />
        </div>

        
        <h3>
          {isActive && (
            <div className='active-btn'>
              <button><FaTree /></button>
              <button><FaFacebook /></button>
              <button><FaInstagram /></button>
              <button><FaTiktok /></button>
              <button><FaTelegram /></button>
              <button onClick={ e => setIsActive(!isActive) }><FaTimes /></button>
            </div>
          )}
          <Link to='#' onClick={ e => setIsActive(!isActive) } >Busayo David [Love Dr]</Link> is our dedicated leader of Ephesians 5 Tribe
          with wisdom and passion. They are committed to serving the community
          and helping us grow in our faith.
        </h3>
      </div>
    </div>
  );
};

export default ConvenerInfo;
