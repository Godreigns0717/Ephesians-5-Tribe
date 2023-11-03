import React from 'react';
import './ImageLightbox.css';


const ImageLightbox = ({ imageUrl, onClose }) => {
  return (
    <div className="image-lightbox">
      <span className="close-button" onClick={onClose}>
        &times;
      </span>
      <img src={imageUrl} alt="Full-screen" />
    </div>
  );
};

export default ImageLightbox;
