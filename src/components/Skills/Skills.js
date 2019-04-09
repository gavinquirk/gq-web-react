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
          <div className='skill-main-heading'>
            <h4>Design</h4>
          </div>
          <div className='skill-text'>
            Good design makes a huge difference in the look and feel of a
            website. Mobile responsiveness ensures that users can use a site
            from any device.
          </div>
          <div className='skill-subheading'>
            <h4>What I Design</h4>
          </div>
          <p>UX, UI, Web and Mobile Applications</p>
          <div className='skill-subheading'>
            <h4>My Favorite Tools</h4>
          </div>
          <ul className='skill-tools'>
            <li>Pen and Paper</li>
            <li>Ruler and Graphs</li>
            <li>Wacom Stylus</li>
            <li>PhotoShop</li>
          </ul>
        </div>
        {/* SKILL 2 */}
        <div className='skill skill-2'>
          <div className='skill-icon'>
            <i className='fas fa-file-code' />
          </div>
          <div className='skill-main-heading'>
            <h4>Front-End</h4>
          </div>
          <div className='skill-text'>
            Speed and functionality are the most important things on the
            front-end of an application. Search engine optimization is important
            for helping users to find a website.
          </div>
          <div className='skill-subheading'>
            <h4>Languages I Use</h4>
          </div>
          <p>CSS, SCSS, JavaScript</p>
          <div className='skill-subheading'>
            <h4>My Favorite Tools</h4>
          </div>
          <ul className='skill-tools'>
            <li>React.js</li>
            <li>jQuery</li>
            <li>CSS Preprocessors</li>
            <li>Bootstrap</li>
            <li>Materialize</li>
            <li>Webpack</li>
          </ul>
        </div>
        {/* SKILL 3 */}
        <div className='skill skill-3'>
          <div className='skill-icon'>
            <i className='fas fa-server' />
          </div>
          <div className='skill-main-heading'>
            <h4>Back-End</h4>
          </div>
          <div className='skill-text'>
            Data structure, sanitization and authentication ensure that a server
            and database remain intact when interacting with users across the
            web.
          </div>
          <div className='skill-subheading'>
            <h4>Languages I Use</h4>
          </div>
          <p>JavaScript, PHP</p>
          <div className='skill-subheading'>
            <h4>My Favorite Tools</h4>
          </div>
          <ul className='skill-tools'>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Docker</li>
          </ul>
        </div>
      </div>
    );
  }
}
