import React from 'react';

import './AsideLinks.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const AsideLinks = () => {
  return (
    <>
      <ul className="flex-col mb-8">
        <li className="mb-4">
          <NavLink to="/men" className="flex justify-between text-lg">
            Men <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
          </NavLink>
        </li>

        <li>
          <NavLink to="/women" className="flex justify-between text-lg">
            Women <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
          </NavLink>
        </li>
      </ul>
      <hr className="mb-8 border-black" />

      <ul className="flex-col ">
        <li className="mb-4">
          <NavLink to="/company" className="flex justify-between text-lg">
            Company <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
          </NavLink>
        </li>

        <li className="mb-4">
          <NavLink
            to="/customer-support"
            className="flex justify-between text-lg "
          >
            Customer Support
            <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink to="/legal" className="flex justify-between text-lg">
            Legal
            <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
          </NavLink>
        </li>
        <hr className="my-8 border-black" />
        <li>
          <NavLink to="/account" className="flex justify-between text-lg">
            Account <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default AsideLinks;
