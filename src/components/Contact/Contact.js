import React, { Component } from 'react';

import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div className='Contact'>
        <h1 className='heading heading-large'>Contact Me</h1>
        <p>
          Send me an email at{' '}
          <a href='mailto:gavinquirk.work@gmail.com'>
            gavinquirk.work@gmail.com
          </a>{' '}
          to start planning your project
        </p>
      </div>
    );
  }
}
