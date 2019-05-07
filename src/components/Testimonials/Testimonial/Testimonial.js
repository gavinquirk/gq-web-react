import React, { Component } from 'react';

import './Testimonial.css';

export default class Testimonial extends Component {
  render() {
    return (
      <div className='Testimonial'>
        {/* <img src={this.props.testimonial.image} alt='testimonial' /> */}
        <p className='Testimonial__content'>
          "{this.props.testimonial.content}"
        </p>
        <br />
        <p>
          {this.props.testimonial.name} - {this.props.testimonial.position}
        </p>
      </div>
    );
  }
}
