import React, { useState, useEffect } from 'react';
import './Countdown-couch.css'

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeRemaining = () => {
    const currentDate = new Date();
    const timeRemaining = targetDate - currentDate;

    if (timeRemaining <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const seconds = Math.floor((timeRemaining / 1000) % 60);
    const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [time, setTime] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);


  

  return (
    <div className='Countdown'>
      <h1 className='Countdown-title'>Next Couch Edition</h1>
      <div className='Countdown-preview'>
        <p className='time days'>Days: {time.days}</p>
        <p className=' time hours'>Hours: {time.hours}</p>
        <p className=' time minutes'>Minutes: {time.minutes}</p>
        <p className=' time seconds'>Seconds: {time.seconds}</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
