import React from 'react';
import FooterForm from './FooterForm';
import { NavLink } from 'react-router-dom';
import FooterLinks from './FooterLinks';
import FooterSocials from './FooterSocials';

const Footer = () => {
  return (
    <footer className=" mb-6 mt-32 px-10 pb-6 ">
      <div className=" grid grid-cols-12 gap-5">
        <div className=" col-span-6 max-md:col-span-12 max-sm:mb-4 max-md:mb-12 max-lg:mb-12 mb-24">
          <p className="mb-2 text-[16px]">Newsletter</p>
          <p className="mb-2 text-[16px]">Join our community and get 10%</p>
          <FooterForm />
          <div className="grid grid-cols-12">
            <p className="col-span-8">
              By signing up, you agree to Fashion Frenzy sending you marketing
              communications and accept our Privacy Policy.&nbsp;
              <NavLink to="/terms-and-condition" className="link">
                *Click here for offer terms and conditions.
              </NavLink>
              &nbsp;
            </p>
          </div>
        </div>
        <div className="col-span-3 max-md:col-span-8">
          <FooterLinks />
        </div>
        <div className="col-span-2 max-md:hidden">
          <FooterSocials />
        </div>
        <div className="col-span-1 max-md:col-span-4  relative ">
          <img
            className="absolute right-0"
            src="//cdn.shopify.com/s/files/1/1074/5128/t/665/assets/b-corp-logo.svg?v=41308094921497457851665393262"
            alt="certified B corporation"
          />
        </div>
      </div>

      <span className=" absolute">© Copyright 2023 Fashion Frenzy.</span>
    </footer>
  );
};

export default Footer;
