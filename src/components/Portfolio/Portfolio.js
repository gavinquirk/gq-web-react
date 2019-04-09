import React, { Component } from 'react';

import './Portfolio.css';

export default class Portfolio extends Component {
  render() {
    return (
      <div className='Portfolio'>
        <h1 className='heading heading-large'>My Projects</h1>
        <div className='portfolio-grid'>
          <div className='card card-1'>card</div>
          <div className='card card-2'>card</div>
          <div className='card card-3'>card</div>
          <div className='card card-4'>card</div>
          <div className='card card-5'>card</div>
          <div className='card card-6'>card</div>
        </div>
      </div>
    );
  }
}
