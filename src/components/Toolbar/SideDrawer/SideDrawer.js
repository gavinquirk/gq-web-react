import React from 'react';
import { Link } from 'react-scroll';

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = ['side-drawer'];
  if (props.show) {
    drawerClasses = ['side-drawer', 'open'];
  }

  return (
    <nav className={drawerClasses.join(' ')}>
      <ul>
        <li>
          <Link
            to='Introduction'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={props.close}
          >
            <span>Introduction</span>
          </Link>
        </li>
        <li>
          <Link
            to='Portfolio'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={props.close}
          >
            <span>Portfolio</span>
          </Link>
        </li>
        <li>
          <Link
            to='Testimonials'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={props.close}
          >
            <span>Testimonials</span>
          </Link>
        </li>
        <li>
          <Link
            to='Contact'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={props.close}
          >
            <span>Contact</span>
          </Link>
        </li>
        <li>
          <a
            href='/documents/GavinQuirk_Resume.docx'
            download
            className='NavigationItem'
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
