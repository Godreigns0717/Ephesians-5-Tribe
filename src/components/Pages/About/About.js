import React from 'react';
import Navbar from '../../Navbar'
import Footer from '../../Footer';
import E5TInfo from './E5TInfo';
import ConvenerInfo from './ConvernerInfo';
import Ministries from './MinistriesInfo';
import './About.css';
import ScrollToTopButton from '../../ScrollToTopButton';
import TopIcons from '../../TopIcons';

const About = () => {
  return (
    <div className='About'>
      <TopIcons />
      <Navbar />
      <div className="about-page">
        <E5TInfo />
        <hr></hr>
        <ConvenerInfo />
        <hr></hr>
        <Ministries />
      </div>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default About;
