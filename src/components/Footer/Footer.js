import React, { Component } from 'react';

import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className='Footer'>
        <div className='footer-social'>
          <a href='https://github.com/gavinquirk' target='_blank'>
            <i className='fab fa-github-square' />
          </a>
          <a href='https://www.linkedin.com/in/gavin-quirk/' target='_blank'>
            <i className='fab fa-linkedin' />
          </a>
          <a href='mailto:gavinquirk.work@gmail.com'>
            <i className='fas fa-envelope-square' />
          </a>
        </div>
        <p>Hand crafted by Gavin Quirk</p>
        <p>gavinquirk.work@gmail.com</p>
      </div>
    );
  }
}
