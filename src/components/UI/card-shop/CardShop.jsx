import React from 'react';
import './CardShop.css';
import clothe1 from '../../../assets/heroSection1/image1.jpg';
import { NavLink } from 'react-router-dom';

const CardShop = ({ category }) => {
  return (
    <div className="lg:overflow-hidden w-[280px] h-auto max-sm:m-auto ">
      <div className="hover:scale-105 transform ease-in-out duration-200">
        {/* IMAGE SHOULD HAVE A PROP  */}
        <img src={clothe1} alt="asdf" className="w-[280px] h-[380px] " />
      </div>
      <div className="mt-2">
        <p className="mb-2">Shop</p>

        <NavLink to="/shop/men" className="link text-[1.6rem]">
          {/* TITLE FOR THE CART SHOP EX. (MEN , WOMEN etc...) */}
          {category}
        </NavLink>
      </div>
    </div>
  );
};

export default CardShop;
