import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import './NavigationItems.css';

export default function NavigationItems() {
  return (
    <ul className='NavigationItems'>
      {/* <NavigationItem to='Lander'>Top</NavigationItem> */}
      <NavigationItem to='Introduction'>About</NavigationItem>
      <NavigationItem to='Portfolio'>Projects</NavigationItem>
      <NavigationItem to='Testimonials'>Testimonials</NavigationItem>
      <NavigationItem to='Contact'>Contact</NavigationItem>
      <a
        href='/documents/GavinQuirk_Resume.docx'
        download
        className='NavigationItem'
      >
        Resume
      </a>
    </ul>
  );
}
