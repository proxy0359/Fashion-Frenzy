import React from 'react';
import { NavLink } from 'react-router-dom';

const FooterLinks = () => {
  return (
    <ul className="flex-col text-xl list-none">
      <li className="mb-4">
        <NavLink to="company" className="link">
          Company
        </NavLink>
      </li>
      <li className=" mb-4 flex-shrink-0 w-max">
        <NavLink to="customer-support" className="link ">
          Customer Support
        </NavLink>
      </li>
      <li className="mb-4">
        <NavLink to="legal" className="link">
          Legal
        </NavLink>
      </li>
    </ul>
  );
};

export default FooterLinks;
