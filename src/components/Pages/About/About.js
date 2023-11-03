import React from 'react';
import Navbar from '../../Navbar'
import E5TInfo from './E5TInfo';
import ConvenerInfo from './ConvernerInfo';
import Ministries from './MinistriesInfo';
import './About.css';

const About = () => {
  return (
    <div className='About'>
      <Navbar />
      <div className="about-page">
        <E5TInfo />
        <ConvenerInfo />
        <Ministries />
      </div>
    </div>
  );
};

export default About;
