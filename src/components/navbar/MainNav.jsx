import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import './MainNav.css';
const MainNav = () => {
  return (
    <nav className="flex ">
      <h1 className="bg-black text-white p-5 px-7 mr-10 logo-text ">
        Fashion Frenzy
      </h1>
      <div className="flex justify-between">
        <ul className="flex">
          <li className="pr-1">
            <NavLink
              to="/men"
              className=" flex  nav-item pr-4  items-center h-full"
            >
              Men
              <FontAwesomeIcon
                icon={faChevronDown}
                size="1x"
                className="ml-2"
              />
            </NavLink>
          </li>
          <li className="pr-1 ">
            <NavLink
              to="/women"
              className="flex  nav-item pr-4  items-center h-full"
            >
              Women
              <FontAwesomeIcon
                icon={faChevronDown}
                size="1x"
                className="ml-2"
              />
            </NavLink>
          </li>
          <li className="pr-1 ">
            <NavLink
              to="/impact"
              className=" flex  nav-item pr-4  items-center h-full"
            >
              Impact
              <FontAwesomeIcon
                icon={faChevronDown}
                size="1x"
                className="ml-2"
              />
            </NavLink>
          </li>
        </ul>
        <ul></ul>
      </div>
    </nav>
  );
};

export default MainNav;
