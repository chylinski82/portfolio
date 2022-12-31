import React from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTES } from './App';

const NavBar = (props) => {

  return (
    <ul className='ul-navbar'>
      <li>
        <NavLink to={ROUTES.HOME}>Home</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.PROJECTS}>Projects</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.CV}>CV</NavLink>
      </li>
    </ul>
  )
}

export default NavBar