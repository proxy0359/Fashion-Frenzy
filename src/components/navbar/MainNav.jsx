import React from 'react';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';

import './MainNav.css';

// ----- NAVBAR -------------
const MainNav = () => {
  return (
    <nav className="flex nav">
      <NavLink to="/" className="flex-shrink-0">
        <h1 className=" block shrink-0 bg-black text-white p-5 px-7 mr-10 logo-text cursor-pointer ">
          Fashion Frenzy
        </h1>
      </NavLink>
      <NavLinks />
    </nav>
  );
};

export default MainNav;
