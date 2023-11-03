// Loading.js
import React from 'react';
import './Loading.css'

const Loading = () => {
  return (
    <div className="loading">
      <div className='loader-image'></div>
      <div className="loader"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
