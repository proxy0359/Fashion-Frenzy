import React from 'react';
import { NavLink } from 'react-router-dom';

const ImpactLinks = () => {
  return (
    <ul>
      <li>
        <NavLink to="#impact" className="text-[#384972] mb-4">
          Business Impact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="#sourcingAndSustainability"
          className="text-[#384972] mb-4"
        >
          Sourcing & Sustainability
        </NavLink>
      </li>
      <li>
        <NavLink to="#productAndDesign" className="text-[#384972] mb-4">
          Product & Design
        </NavLink>
      </li>
    </ul>
  );
};

export default ImpactLinks;
