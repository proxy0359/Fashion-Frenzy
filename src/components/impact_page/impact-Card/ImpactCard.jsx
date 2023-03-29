import React from 'react';
import { NavLink } from 'react-router-dom';

const ImpactCard = ({ title, img, category, description, to }) => {
  return (
    <div className=" w-[360px] h-auto max-sm:m-auto mx-2  ">
      <div className="mt-2 mb-4">
        <p className="mb-2 text-base">{title ? title : 'Shop'}</p>

        <NavLink to="/shop/men" className="link text-[1.6rem]">
          {/* TITLE FOR THE CART SHOP EX. (MEN , WOMEN etc...) */}
          {category}
        </NavLink>
      </div>
      <div className="hover:scale-105 transform ease-in-out duration-200">
        {/* IMAGE SHOULD HAVE A PROP  */}
        <NavLink to={to}>
          <img
            src={img ? img : clothe1}
            alt={title}
            className="w-full h-full cursor-pointer "
          />
        </NavLink>
      </div>
      <div className="w-full h-56">
        <h3 className="h3 mt-4 max-md:!text-[1.5rem] max-sm:!text-[1.3rem]">
          {description}
        </h3>
      </div>
    </div>
  );
};

export default ImpactCard;
