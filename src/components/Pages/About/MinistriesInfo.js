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
        title: 'The Couch',
        content: 'Content for Card 1 goes here.',
      },
      {
        image: '/images/image2.jpeg',
        title: 'Touched',
        content: 'Content for Card 2 goes here.',
      },
      {
        image: '/images/image4.jpeg',
        title: 'Online Meetings',
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
