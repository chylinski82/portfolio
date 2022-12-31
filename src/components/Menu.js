import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTES } from './App';

import { HiMenu } from 'react-icons/hi';

const Menu = () => {
    const [dropdown, setDropdown] = useState(false);

    const showDropdown = () => {
        return dropdown ? 'dropdown-content-on' : 'dropdown-content-off';
    }

    return (
        <div>
            <button className='menu'
                    onClick={() => setDropdown(!dropdown)}><HiMenu size='35px'/></button>
            <ul className={showDropdown()}>
                <li>
                    <NavLink to={ROUTES.HOME} onClick={() => setDropdown(false)}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.PROJECTS} onClick={() => setDropdown(false)}>Projects</NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.CV} onClick={() => setDropdown(false)}>CV</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Menu