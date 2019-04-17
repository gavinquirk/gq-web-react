import React, { Component } from 'react';

import './Introduction.css';

export default class Introduction extends Component {
  render() {
    return (
      <div className='Introduction'>
        <div className='introduction-content'>
          <h2 className='heading heading-medium'>
            My name's Gavin. Nice to meet you.
          </h2>
          <p className='introduction-text'>
            I am a freelance web developer based in California, and I create
            everything from simple personal sites to complex and customized
            full-stack applications. I like to use modern yet compatable
            technologies allowing for the creation of fast and beautiful
            websites.
          </p>
        </div>
      </div>
    );
  }
}
