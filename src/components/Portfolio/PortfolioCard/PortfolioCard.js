import React, { Component } from 'react';

import './PortfolioCard.css';

export default class PortfolioCard extends Component {
  render() {
    return (
      <div className='PortfolioCard'>
        <img className='portfolio-image' src={this.props.image} alt='project' />
        <div className='portfolio-image-overlay'>
          <div className='portfolio-image-overlay-content'>
            <h2>{this.props.name}</h2>
            <p>{this.props.description}</p>
            <div className='portfolio-image-overlay-buttons'>
              <a
                href={this.props.github}
                target='_blank'
                rel='noopener noreferrer'
              >
                <button>Github</button>
              </a>
              <a
                href={this.props.deployment}
                target='_blank'
                rel='noopener noreferrer'
              >
                <button>Live Site</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
