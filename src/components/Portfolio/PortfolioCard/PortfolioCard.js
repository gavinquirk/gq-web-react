import React, { Component } from 'react';

import './PortfolioCard.css';

export default class PortfolioCard extends Component {
  render() {
    return (
      <div className='PortfolioCard'>
        <img
          className='portfolio-image'
          src='./images/img-placeholder.jpg'
          alt='project'
        />
        <div className='portfolio-image-overlay'>
          <div className='portfolio-image-overlay-content'>
            <h4>TITLE</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam,
              blanditiis?
            </p>
            <div className='portfolio-image-overlay-buttons'>
              <button>BUTTON</button>
              <button>BUTTON</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
