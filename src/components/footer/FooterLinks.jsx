import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import FooterSocials from './FooterSocials';

const FooterLinks = () => {
  const [socialDropDown, setSocialDropdown] = useState(false);

  const dropDownHandler = () => {
    setSocialDropdown((drop) => !drop);
  };

  return (
    <ul className="flex-col text-xl list-none">
      <li className="mb-4">
        <NavLink to="/about" className="link">
          Company
        </NavLink>
      </li>
      <li className=" mb-4 flex-shrink-0 w-max">
        <NavLink to="/support" className="link ">
          Customer Support
        </NavLink>
      </li>
      <li className="mb-4">
        <NavLink to="/terms-and-condition" className="link">
          Legal
        </NavLink>
      </li>
      <li className="hidden max-md:block">
        <FooterSocials
          dropdown={true}
          onClick={dropDownHandler}
          showSocials={socialDropDown}
        />
      </li>
    </ul>
  );
};

export default FooterLinks;
