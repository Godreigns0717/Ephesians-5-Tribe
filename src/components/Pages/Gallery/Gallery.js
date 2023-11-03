import React, { useState } from 'react';
import ImageLightbox from './ImageLightbox';
import Navbar from '../../Navbar';
import './Gallery.css'

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const imageUrls = [
    '/images/image1.jpeg',
    '/images/image2.jpeg',
    '/images/image3.jpg',
    '/images/image4.jpeg',
    '/images/image5.jpeg',
    '/images/image6.jpeg',
    '/images/image1.jpeg',
    '/images/image2.jpeg',
    '/images/image3.jpg',
    '/images/image4.jpeg',
    '/images/image5.jpeg',
    '/images/image6.jpeg',
    // Add more image URLs as needed
  ];

  const openLightbox = (imageUrl) => {
    setSelectedImage(imageUrl);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setSelectedImage('');
    setLightboxOpen(false);
  };

  return (
    <div className='Gallery'>
      <div className="gallery">
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="image-container" onClick={() => openLightbox(imageUrl)}>
            <img src={imageUrl} alt={`Image ${index + 1}`} />
          </div>
        ))}
      {lightboxOpen && (
        <ImageLightbox imageUrl={selectedImage} onClose={closeLightbox} />
      )}
    </div>
    </div>
  );
};

export default Gallery;
