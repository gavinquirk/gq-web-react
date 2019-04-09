import React, { Component } from 'react';

import PortfolioCard from './PortfolioCard/PortfolioCard';

import './Portfolio.css';

export default class Portfolio extends Component {
  render() {
    return (
      <div className='Portfolio'>
        <h1 className='heading heading-large'>My Projects</h1>
        <div className='portfolio-grid'>
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </div>
      </div>
    );
  }
}

// Projects that will be used: devconnector, natours, trillo, nexter, burger-builder, react-ecommerce
