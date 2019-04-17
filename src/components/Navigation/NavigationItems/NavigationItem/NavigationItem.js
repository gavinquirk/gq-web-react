import React from 'react';

import { Link } from 'react-scroll';

import './NavigationItem.css';

// export default function NavigationItem(props) {
//   return <li className='NavigationItem'>{props.children}</li>;
// }

export default function NavigationItem(props) {
  return (
    <li className='NavigationItem'>
      <Link
        to={props.to}
        activeClass='active'
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <span>{props.children}</span>
      </Link>
    </li>
  );
}
