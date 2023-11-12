import React from 'react';
import './ConvernerInfo.css'
import { Link } from 'react-router-dom';
// import Image from '../../../../public/images/image1.jpeg'; // Replace with your convenor image path

const ConvenerInfo = () => {
  return (
    <div className="convener-info">
      <h2>Our Convener</h2>
      <div className='content'>
        <div className='image-background'>
          <img src='/images/YYG_1_-removebg-preview.png' alt="Convenor" />
        </div>
        <h3>
          <Link href='/'>Busayo David [Love Dr]</Link> is our dedicated leader of Ephesians 5 Tribe
          with wisdom and passion. They are committed to serving the community
          and helping us grow in our faith.
        </h3>
      </div>
    </div>
  );
};

export default ConvenerInfo;
