import React, { Component } from 'react';

import './Introduction.css';

export default class Introduction extends Component {
  render() {
    return (
      <div className='Introduction'>
        <div className='introduction-start'>
          <h2 className='heading heading-medium'>
            My name's Gavin. Nice to meet you.
          </h2>
          <p className='introduction-text'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            beatae delectus vel in aliquam eaque consectetur similique natus
            velit optio provident cum esse aut voluptate ullam exercitationem ut
            explicabo, odio asperiores? Nesciunt suscipit nulla, nihil sit
            consequatur voluptatibus inventore praesentium.
          </p>
        </div>

        <div className='introduction-skills'>
          <div className='skills-section design'>
            <p className='skills-icon'>ICON</p>
            <h4 className='skills-heading'>Design</h4>
            <p className='skills-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              nesciunt facilis. Rem obcaecati recusandae sequi vero numquam
              vitae tempore voluptates.
            </p>
            <h5 className='skills-subheading'>What I Design</h5>
            <p className='skills-languages'>apps, mobile, etc</p>
            <h5 className='skills-subheading'>My Favorite Tools</h5>
            <ul className='skills-tools'>
              <li className='li'>tool 1</li>
              <li className='li'>tool 1</li>
              <li className='li'>tool 1</li>
              <li className='li'>tool 1</li>
            </ul>
          </div>
          <div className='skills-section design'>
            <p className='skills-icon'>ICON</p>
            <h4 className='skills-heading'>Design</h4>
            <p className='skills-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              nesciunt facilis. Rem obcaecati recusandae sequi vero numquam
              vitae tempore voluptates.
            </p>
            <h5 className='skills-subheading'>What I Design</h5>
            <p className='skills-languages'>apps, mobile, etc</p>
            <h5 className='skills-subheading'>My Favorite Tools</h5>
            <ul className='skills-tools'>
              <li className='li'>tool 1</li>
              <li className='li'>tool 1</li>
              <li className='li'>tool 1</li>
              <li className='li'>tool 1</li>
            </ul>
          </div>
          <div className='skills-section design'>
            <p className='skills-icon'>ICON</p>
            <h4 className='skills-heading'>Design</h4>
            <p className='skills-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              nesciunt facilis. Rem obcaecati recusandae sequi vero numquam
              vitae tempore voluptates.
            </p>
            <h5 className='skills-subheading'>What I Design</h5>
            <p className='skills-languages'>apps, mobile, etc</p>
            <h5 className='skills-subheading'>My Favorite Tools</h5>
            <ul className='skills-tools'>
              <li className='li'>tool 1</li>
              <li className='li'>tool 1</li>
              <li className='li'>tool 1</li>
              <li className='li'>tool 1</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
