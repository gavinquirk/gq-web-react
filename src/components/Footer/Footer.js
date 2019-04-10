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
        <p>
          Illustration credit: <a href='https://vecteezy.com'>Vecteezy.com</a>
        </p>
        <div className='footer-certifications'>
          <img src='./images/badge_html_css.png' alt='badge' />
          <img src='./images/badge_javascript_jquery.png' alt='badge' />
          <img src='./images/badge_node_express.png' alt='badge' />
          <img src='./images/badge_react.png' alt='badge' />
          <img src='./images/badge_sql_nosql.png' alt='badge' />
        </div>
      </div>
    );
  }
}
