import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import Testimonial from './Testimonial/Testimonial';

import './Testimonials.css';

export default class Testimonials extends Component {
  render() {
    const testimonialData = [
      {
        name: 'Vicente Gonzalez',
        position: 'Credit Analyst | Web Developer',
        content:
          'Very few people have the capacity to execute under pressure, as does Gavin.',
        image: './images/testimonial_placeholder.png'
      },
      {
        name: 'Christian Lopes',
        position: 'Client Service & Business Operations Manager',
        content:
          'Gavin keeps things cool under pressure, and has an impressive ability to solve complex problems and rapidly grasp new concepts. His razor sharp development skills set the bar for our cohort.',
        image: './images/testimonial_placeholder.png'
      },
      {
        name: 'Ian Daelucian',
        position: 'CoFounder at ARTALLUS',
        content:
          'Gavin is patient, methodical, and thinks before he acts. He proves his technical skills in the delivery of his work and executes on requirements with precision.',
        image: './images/testimonial_placeholder.png'
      },
      {
        name: 'Jeremy Knappe',
        position: 'RBT/Job Coach at Liberty Employment Services',
        content:
          'Gavin is a terrific team player that is top-notch in writing front-end and back-end languages. He is dependable, easygoing, and outstanding in his field.',
        image: './images/testimonial_placeholder.png'
      }
    ];

    return (
      <div className='Testimonials'>
        <h1 className='heading heading-large'>Testimonials</h1>
        <Slider
          infinite={true}
          autoplay={10000}
          previousButton={<i class='fas fa-arrow-left slider-button' />}
          nextButton={<i class='fas fa-arrow-right slider-button' />}
        >
          {testimonialData.map((testimonial, index) => (
            <div key={index}>
              <Testimonial testimonial={testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
