import React from 'react';
import { Link } from 'react-scroll';

import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className='Toolbar'>
    <nav className='Toolbar__navigation'>
      <div className='Toolbar__toggle-button'>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      {/* <div className='Toolbar__logo'>
        <a href='#'>THE LOGO</a>
      </div> */}
      <div className='spacer' />
      <div className='Toolbar__navigation-items'>
        <ul>
          <li>
            <Link
              to='Introduction'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
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
              offset={0}
              duration={500}
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
              <span>Resume</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
