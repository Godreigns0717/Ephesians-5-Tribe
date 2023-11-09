import React, { useState, useEffect } from 'react';
import './Slideshow.css'

const Slideshow = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, [slides]);

  return (
    <div className="slideshow">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img src={slide.image} alt={slide.title} />
          <h2>{slide.title}</h2>
          <p>{slide.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
