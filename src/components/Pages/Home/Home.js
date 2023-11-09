import React from 'react';
import Navbar from '../../Navbar';
import './Home.css'
import MinistryCard from './MinistryCard';
import Slideshow from './Slideshow.js';
import JoinWork from './Join_work.js';
import CountdownTimer from './Countdown-couch.js';
import Footer from '../../Footer';
import ScrollToTopButton from '../../ScrollToTopButton'


const Home = () => {
  // Calculate the target date, e.g., 3 days, 2 hours, 30 minutes, and 15 seconds from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 6);
  targetDate.setHours(targetDate.getHours() + 5);
  targetDate.setMinutes(targetDate.getMinutes() + 59);
  targetDate.setSeconds(targetDate.getSeconds() + 0);

  const slides = [
    {
      image: '/images/image1.jpeg',
      title: 'Slide 1',
      description: 'Description for Slide 1',
    },
    {
      image: '/images/image1.jpeg',
      title: 'Slide 2',
      description: 'Description for Slide 2',
    },
    {
      image: '/images/image3.jpg',
      title: 'Slide 3',
      description: 'Description for Slide 3',
    },
  ];


  return (

    <div className="Home">
        <Navbar /> 
        <Slideshow slides={slides} />
        <MinistryCard />
        <JoinWork />
        <CountdownTimer targetDate={targetDate} />
        <ScrollToTopButton />
        <Footer />
    </div>
  );
}

export default Home;