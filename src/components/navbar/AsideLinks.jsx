import React from 'react';

import './AsideLinks.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const AsideLinks = ({ onClick }) => {
  return (
    <>
      <ul className="flex-col mb-8">
        <li className="mb-4">
          <NavLink
            to="/men"
            className="flex justify-between text-lg"
            onClick={onClick}
          >
            Men <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/women"
            className="flex justify-between text-lg"
            onClick={onClick}
          >
            Women <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
          </NavLink>
        </li>
      </ul>
      <hr className="mb-8 border-black" />

      <ul className="flex-col ">
        <li className="mb-4">
          <NavLink
            to="/about"
            className="flex justify-between text-lg"
            onClick={onClick}
          >
            Company <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
          </NavLink>
        </li>

        <li className="mb-4">
          <NavLink
            to="/support/contact"
            className="flex justify-between text-lg "
            onClick={onClick}
          >
            Customer Support
            <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink
            to="/impact"
            className="flex justify-between text-lg "
            onClick={onClick}
          >
            Impact
            <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink
            to="/legal"
            className="flex justify-between text-lg"
            onClick={onClick}
          >
            Legal
            <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
          </NavLink>
        </li>
        <hr className="my-8 border-black" />
        <li>
          <NavLink
            to="/account"
            className="flex justify-between text-lg"
            onClick={onClick}
          >
            Account <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default AsideLinks;
