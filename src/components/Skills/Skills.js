import React, { Component } from 'react';

import './Skills.css';

export default class Skills extends Component {
  render() {
    return (
      <div className='Skills'>
        {/* SKILL 1 */}
        <div className='skill skill-1'>
          <div className='skill-icon'>
            <i className='fas fa-pencil-ruler' />
          </div>
          <div className='skill-main-heading'>Design</div>
          <div className='skill-text'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            tempore dignissimos pariatur, eos accusantium molestias magni
            doloribus ducimus! Quo, eius?
          </div>
          <div className='skill-subheading'>SUBHEADING</div>
        </div>
        {/* SKILL 2 */}
        <div className='skill skill-2'>
          <div className='skill-icon'>
            <i className='fas fa-file-code' />
          </div>
          <div className='skill-main-heading'>Front-End</div>
          <div className='skill-text'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
            nobis est odit esse sed numquam enim. Sint odio consectetur eligendi
            suscipit delectus! Magnam, fugiat et labore explicabo dignissimos
            nam modi corrupti, minima ipsum amet ab perspiciatis perferendis!
            Natus, alias voluptatibus repudiandae ut aliquam maiores delectus
            quae fugit voluptates cupiditate atque?
          </div>
          <div className='skill-subheading'>SUBHEADING</div>
        </div>
        {/* SKILL 3 */}
        <div className='skill skill-3'>
          <div className='skill-icon'>
            <i className='fas fa-server' />
          </div>
          <div className='skill-main-heading'>Back-End</div>
          <div className='skill-text'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            tempore dignissimos pariatur, eos accusantium molestias magni
            doloribus ducimus! Quo, eius?
          </div>
          <div className='skill-subheading'>SUBHEADING</div>
        </div>
      </div>
    );
  }
}
