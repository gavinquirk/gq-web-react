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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            beatae delectus vel in aliquam eaque consectetur similique natus
            velit optio provident cum esse aut voluptate ullam exercitationem ut
            explicabo, odio asperiores? Nesciunt suscipit nulla, nihil sit
            consequatur voluptatibus inventore praesentium.
          </p>
        </div>
      </div>
    );
  }
}
