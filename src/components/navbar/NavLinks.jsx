import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faBars,
  faXmark,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Cart from './cart/Cart';
import { useSelector } from 'react-redux';
import './NavLinks.css';

const NavLinks = (props) => {
  const showCartActive = useSelector((state) => state.ui.showCart);
  return (
    <div className="flex justify-between  h-auto pr-4 w-full max-lg:w-auto">
      <ul className="flex max-lg:hidden ">
        <li className="pr-1">
          <NavLink
            to="/men"
            className=" flex  nav-item pr-4  items-center h-full "
          >
            Men
            <FontAwesomeIcon icon={faChevronRight} size="1x" className="ml-2" />
          </NavLink>
        </li>
        <li className="pr-1 ">
          <NavLink
            to="/women"
            className="flex  nav-item pr-4  items-center h-full"
          >
            Women
            <FontAwesomeIcon icon={faChevronRight} size="1x" className="ml-2" />
          </NavLink>
        </li>
        <li className="pr-1 ">
          <NavLink
            to="/impact"
            className=" flex  nav-item pr-4  items-center h-full"
          >
            Impact
            <FontAwesomeIcon icon={faChevronRight} size="1x" className="ml-2" />
          </NavLink>
        </li>
      </ul>

      <ul className="flex ">
        <li className="pr-1 max-lg:hidden ">
          <NavLink
            to="/login"
            className="flex  nav-item pr-4  items-center h-full"
          >
            Account
          </NavLink>
        </li>
        <li className="pr-1 max-lg:hidden ">
          <NavLink
            to="/support/contact"
            className="flex  nav-item pr-4  items-center h-full"
          >
            Help
          </NavLink>
        </li>
        {props.showSide ? null : (
          <li className="flex  items-center flex-shrink-0">
            <Cart />
          </li>
        )}
        {showCartActive ? null : (
          <li className=" flex items-center lg:hidden ">
            <FontAwesomeIcon
              icon={props.sideActive ? faXmark : faBars}
              className="text-2xl pr-4  cursor-pointer w-7"
              size="1x"
              onClick={props.openSide}
            />
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavLinks;
