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

        <table className='introduction-table'>
          <tr>
            <td>
              <i class='far fa-object-ungroup' />
            </td>
            <td>
              <i class='far fa-file-code' />
            </td>
            <td>
              <i class='fas fa-server' />
            </td>
          </tr>

          <tr>
            <td className='table-section'>
              <h4 className='heading heading-small'>Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae molestiae hic provident. Mollitia, vero iusto.
              </p>
            </td>
            <td className='table-section'>
              <h4 className='heading heading-small'>Front-End</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae molestiae hic provident. Mollitia, vero iusto.
              </p>
            </td>
            <td className='table-section'>
              <h4 className='heading heading-small'>Back-End</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae molestiae hic provident. Mollitia, vero iusto.
              </p>
            </td>
          </tr>

          <tr>
            <td className='table-section'>
              <h4 className='table-heading-small'>What I Design</h4>
              <p>UI, UX, Web Apps, Mobile Responsive</p>
            </td>
            <td className='table-section'>
              <h4 className='table-heading-small'>Languages I Use</h4>
              <p>HTML, CSS, SCSS, JavaScript</p>
            </td>
            <td className='table-section'>
              <h4 className='table-heading-small'>Languages I Use</h4>
              <p>JavaScript, PHP</p>
            </td>
          </tr>

          <tr>
            <td className='table-section'>
              <h4 className='table-heading-small'>My Favorite Tools</h4>
              <ul>
                <li>Pen and Paper</li>
                <li>Photoshop</li>
                <li>Wacom Tablet</li>
              </ul>
            </td>
            <td className='table-section'>
              <h4 className='table-heading-small'>My Favorite Tools</h4>
              <ul>
                <li>React.js</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
                <li>Materialize</li>
                <li>CSS Grid</li>
              </ul>
            </td>
            <td className='table-section'>
              <h4 className='table-heading-small'>My Favorite Tools</h4>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Docker</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
