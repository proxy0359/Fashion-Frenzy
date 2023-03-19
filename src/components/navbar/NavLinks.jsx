import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import Cart from './cart/Cart';
import './NavLinks.css';

const NavLinks = () => {
  return (
    <div className="flex justify-between w-full h-auto pr-4">
      <ul className="flex ">
        <li className="pr-1">
          <NavLink
            to="/men"
            className=" flex  nav-item pr-4  items-center h-full "
          >
            Men
            <FontAwesomeIcon icon={faChevronDown} size="1x" className="ml-2" />
          </NavLink>
        </li>
        <li className="pr-1 ">
          <NavLink
            to="/women"
            className="flex  nav-item pr-4  items-center h-full"
          >
            Women
            <FontAwesomeIcon icon={faChevronDown} size="1x" className="ml-2" />
          </NavLink>
        </li>
        <li className="pr-1 ">
          <NavLink
            to="/impact"
            className=" flex  nav-item pr-4  items-center h-full"
          >
            Impact
            <FontAwesomeIcon icon={faChevronDown} size="1x" className="ml-2" />
          </NavLink>
        </li>
      </ul>
      <ul className="flex ">
        <li className="flex  items-center">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="1x"
            className="text-2xl mr-4 cursor-pointer"
          />
        </li>
        <li className="pr-1">
          <NavLink
            to="/help"
            className="flex  nav-item pr-4  items-center h-full pl-2"
          >
            Help
          </NavLink>
        </li>
        <li className="pr-1">
          <NavLink
            to="/login"
            className="flex  nav-item pr-4  items-center h-full"
          >
            Account
          </NavLink>
        </li>
        <li className="flex  items-center">
          <Cart />
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
