import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import './NavigationItems.css';

export default function NavigationItems() {
  return (
    <ul className='NavigationItems'>
      <NavigationItem section='Home'>Top</NavigationItem>
      <NavigationItem section='SectionB'>About</NavigationItem>
      <NavigationItem section='SectionC'>Projects</NavigationItem>
      <NavigationItem section='SectionC'>Testimonials</NavigationItem>
      <NavigationItem section='SectionC'>Contact</NavigationItem>
    </ul>
  );
}
