import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const FooterSocials = ({ dropdown, onClick, showSocials }) => {
  return dropdown ? (
    <div className={showSocials ? 'mb-10' : 'mb-48'}>
      <div className="flex">
        <div
          data-reveal-trigger=""
          className="flex items-center cursor-pointer "
        >
          <span className="link self-start mr-3">Follow Us</span>
          {showSocials ? (
            <FontAwesomeIcon
              icon={faChevronUp}
              onClick={onClick}
              className="text-[#405178]"
            />
          ) : (
            <FontAwesomeIcon
              icon={faChevronDown}
              onClick={onClick}
              className="text-[#405178]"
            />
          )}
        </div>
      </div>

      <div className={`mt-4 ${showSocials ? '' : 'hidden'} text-[16px] `}>
        <ul>
          <li className="mb-1">
            <NavLink>Instagram</NavLink>
          </li>
          <li className="mb-1">
            <NavLink>Facebook</NavLink>
          </li>
          <li className="mb-1">
            <NavLink>Twitter</NavLink>
          </li>
          <li className="mb-1">
            <NavLink>TikTok</NavLink>
          </li>
          <li className="mb-1">
            <NavLink>Podcasts</NavLink>
          </li>
          <li className="mb-1">
            <NavLink>Youtube</NavLink>
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <ul className="flex-col list-none text-[17px] ">
      <li className="mb-4">
        <NavLink>Instagram</NavLink>
      </li>
      <li className="mb-4">
        <NavLink>Facebook</NavLink>
      </li>
      <li className="mb-4">
        <NavLink>Twitter</NavLink>
      </li>
      <li className="mb-4">
        <NavLink>Tiktok</NavLink>
      </li>
      <li className="mb-4">
        <NavLink>Podcasts</NavLink>
      </li>
      <li className="mb-4">
        <NavLink>Youtube</NavLink>
      </li>
    </ul>
  );
};

export default FooterSocials;
