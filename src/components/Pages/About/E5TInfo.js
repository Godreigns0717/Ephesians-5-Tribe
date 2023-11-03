import React from 'react';
import './About.css';
// import Image from '../../../../public/images/image1.jpeg';// Replace with your church image path

const E5TInfo = () => {
  return (
    <div className="church-info">
      <h1>About Our Church</h1>
      <img src='/images/image1.jpeg' alt="Church Building" />
      <p>
        Welcome to [Church Name], a place of worship and community where we
        seek to bring people closer to God and each other.
      </p>
    </div>
  );
};

export default E5TInfo;
