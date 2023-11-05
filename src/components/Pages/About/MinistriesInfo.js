import React from 'react';
import './MinistriesInfo.css'

const Ministries = () => {
  return (
    <div className="ministries-info">
      <h2>Our Ministries</h2>
      <p>
        At The Ephesians 5 Tribe, we offer a variety of ministries to cater to the
        spiritual needs of our congregation. These ministries include:
      </p>
      <ul>
        <li>
          <img src='/images/image3.jpg' alt='couch' />
          <a href='/'>The Couch</a>
        </li>
        <li>
          <img src='/images/image3.jpg' alt='couch' />
          <a href='/'>Online Meetings</a>
        </li>
        <li>
          <img src='/images/image3.jpg' alt='couch' />
          <a href='/'>Touched</a>
        </li>
      </ul>
      <p>
        Each ministry is dedicated to fostering a deeper connection with God
        and providing opportunities for personal growth and community
        involvement.
      </p>
    </div>
  );
};

export default Ministries;
