import React, { Component } from 'react';

import './Lander.css';

export default class Lander extends Component {
  render() {
    return (
      <div className='Lander'>
        <h1 className='heading heading-large'>Web Designer and Developer</h1>
        <img className='avatar' src='./images/avatar.svg' />
      </div>
    );
  }
}
