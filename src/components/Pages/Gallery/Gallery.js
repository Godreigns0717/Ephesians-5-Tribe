// Gallery.js

import React, { useState } from 'react';
import ImageLightbox from './ImageLightbox';
import imageData from './ImageData';
import ScrollToTopButton from '../../ScrollToTopButton'
import './Gallery.css'
 // Assuming you have imageData.js with the image data

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openLightbox = (imageUrl) => {
    setSelectedImage(imageUrl);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setSelectedImage('');
    setLightboxOpen(false);
  };

  return (
    <div className="gallery-container">
      {Object.keys(imageData).map((month) => (
        <div key={month} className="month-section">
          <h2 className="month-title">{month}</h2>
          <div className="month-images">
            {imageData[month].map((imageUrl, index) => (
              <div key={index} className="image-container" onClick={() => openLightbox(imageUrl)}>
                <img src={imageUrl} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      ))}
      {lightboxOpen && <ImageLightbox imageUrl={selectedImage} onClose={closeLightbox} />}
      <ScrollToTopButton />
    </div>
  );
};

export default Gallery;
