// import React from 'react';
// import './MinistriesInfo.css'

// const Ministries = () => {
//   return (
//     <div className="ministries-info">
//       <h2>Our Ministries</h2>
//       <p>
//         At The Ephesians 5 Tribe, we offer a variety of ministries to cater to the
//         spiritual needs of our congregation. These ministries include:
//       </p>
//       <ul>
//         <li>
//           <img src='/images/image3.jpg' alt='couch' />
//           <a href='/'>The Couch</a>
//         </li>
//         <li>
//           <img src='/images/image3.jpg' alt='couch' />
//           <a href='/'>Online Meetings</a>
//         </li>
//         <li>
//           <img src='/images/image3.jpg' alt='couch' />
//           <a href='/'>Touched</a>
//         </li>
//       </ul>
//       <p>
//         Each ministry is dedicated to fostering a deeper connection with God
//         and providing opportunities for personal growth and community
//         involvement.
//       </p>
//     </div>
//   );
// };

// export default Ministries;




import React, { Component } from 'react';
import './MinistriesInfo.css';

class MinistriesInfo extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 1,
    };
  }

  setActiveCard = (index) => {
    this.setState({ currentIndex: index });
  };

  render() {
    const { currentIndex } = this.state;
    const cards = [
      {
        image: '/images/image1.jpeg',
        title: 'Card 1',
        content: 'Content for Card 1 goes here.',
      },
      {
        image: '/images/image2.jpeg',
        title: 'Card 2',
        content: 'Content for Card 2 goes here.',
      },
      {
        image: '/images/image4.jpeg',
        title: 'Card 3',
        content: 'Content for Card 3 goes here.',
      },
    ];

    return (
      <div className="carousel-container">
        <h2>Our Ministries</h2>
        <div className="carousel">
          {cards.map((card, index) => (
            <div
              className={`card ${currentIndex === index ? 'active' : ''}`}
              key={index}
            >
              <img
                src={card.image}
                alt={card.title}
                onClick={() => this.setActiveCard(index)}
              />
              <h2><a href='/'>{card.title}</a></h2>
              {/* <p>{card.content}</p> */}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MinistriesInfo;
