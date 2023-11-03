import React from 'react';
import './About.css';
// import Image from '../../../../public/images/image1.jpeg'; // Replace with your convenor image path

const ConvenerInfo = () => {
  return (
    <div className="convener-info">
      <h2>Our Convenor</h2>
      <img src='/images/EHTHG.jpg' alt="Convenor" />
      <p>
        [Convenor's Name] is our dedicated leader who guides our church
        with wisdom and passion. They are committed to serving the community
        and helping us grow in our faith.
      </p>
    </div>
  );
};

export default ConvenerInfo;
