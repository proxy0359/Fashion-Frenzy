import React from 'react';
import './CardShop.css';
import clothe1 from '../../../assets/heroSection1/image1.jpg';
import { NavLink } from 'react-router-dom';

const CardShop = ({ category, tagVersion, title, to, price, tags }) => {
  return tagVersion ? (
    <div className=" w-[280px] h-auto max-sm:m-auto mx-3 ">
      <div className=" overflow-hidden">
        {/* IMAGE SHOULD HAVE A PROP  */}
        <img
          src={clothe1}
          alt="asdf"
          className="w-[280px] h-[380px] hover:scale-105 transform ease-in-out duration-200  "
        />
      </div>

      {/* TAG FOR CARD */}
      <div className="flex items-start flex-wrap mb-4">
        {tags.map((tag) => (
          <NavLink to={to}>
            <span className="product-tag">{tag.title} </span>
          </NavLink>
        ))}
      </div>

      {/* NAME OR TITLE OF THE CARD */}
      <div className="mt-2">
        <p className="mb-2 mt-2 text-[19px] font-light">{title}</p>

        <NavLink to="/shop/men" className="link text-[1.6rem]">
          {/* TITLE FOR THE CART SHOP EX. (MEN , WOMEN etc...) */}
          {category}
        </NavLink>
      </div>
      <p className="text-[rgba(56,73,114,1)] inline">
        <span>{`₱${price}`}</span>
      </p>
    </div>
  ) : (
    <div className="lg:overflow-hidden w-[280px] h-auto max-sm:m-auto mx-3 ">
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
