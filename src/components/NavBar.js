import React from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTES } from './App';

const NavBar = () => {

  return (
    <ul>
      <li>
        <NavLink to={ROUTES.HOME}>Home</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.PROJECTS}>Projects</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.CV}>CV</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.CONTACT}>Contact</NavLink>
      </li>
    </ul>
  )
}

export default NavBar