import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomerSupportAside = () => {
  return (
    <>
      <h3 className="h3 mb-6">Customer Support</h3>
      <ul className="flex flex-col">
        {/* PAGE LINK FOR CONTACT */}

        <li className="mb-2">
          <NavLink to="contact">Contact</NavLink>
        </li>

        {/* PAGE LINK FOR FAQS */}

        <li className="mb-2">
          <NavLink to="faqs">FAQs</NavLink>
        </li>

        {/* PAGE LINK FOR PRODUCT CARE AND REPAIR */}

        <li className="mb-2">
          <NavLink to="product&repairs">Product Care & Repairs</NavLink>
        </li>
      </ul>
    </>
  );
};

export default CustomerSupportAside;
