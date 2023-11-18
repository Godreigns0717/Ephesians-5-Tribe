import React from 'react';
import './E5TInfo.css';
// import Image from '../../../../public/images/image1.jpeg';// Replace with your church image path

const E5TInfo = () => {
  return (
    <div className="church-info">
      <h1>About Our Church</h1>
      <div className='content'>
        <img src='/images/image1.jpeg' alt="Church Building" />
        <h3>
          Welcome to <a href='/'>The Ephesians 5 Tribe</a>, a place of worship and community where we
          seek to bring people closer to God and each other.
        </h3>
      </div>
    </div>
  );
};

export default E5TInfo;
