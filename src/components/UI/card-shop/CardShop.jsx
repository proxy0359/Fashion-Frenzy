import React, { useState } from 'react';
import './CardShop.css';
import clothe1 from '../../../assets/heroSection1/image1.jpg';
import { NavLink } from 'react-router-dom';

const CardShop = ({
  category,
  tagVersion,
  title,
  to,
  price,
  tags,
  img,
  img2,
  onClick,
}) => {
  const [onHover, setOnHover] = useState(false);

  const hoverHandler = () => {
    setOnHover((hover) => !hover);
  };

  return tagVersion ? (
    <div className=" w-[280px]  h-auto max-sm:m-auto mx-3 ">
      <div className=" overflow-hidden">
        {/* IMAGE SHOULD HAVE A PROP  */}
        <NavLink to={to}>
          <img
            src={img ? (onHover ? img2 : img) : clothe1}
            alt="clothes"
            className="w-[280px] h-[380px] cursor-pointer max-sm:w-full max-sm:h-full hover:scale-105 transform ease-in-out duration-200  "
            onMouseEnter={hoverHandler}
            onMouseLeave={hoverHandler}
            onClick={onClick}
          />
        </NavLink>
      </div>

      {/* TAG FOR CARD */}
      <div className="flex items-start flex-wrap mb-4">
        {tags.map((tag) => (
          <NavLink to={to} key={tag.title}>
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
        <NavLink to={to}>
          <img
            src={img ? img : clothe1}
            alt={title}
            className="w-[280px] h-[380px] cursor-pointer "
          />
        </NavLink>
      </div>
      <div className="mt-2">
        <p className="mb-2 text-base">{title ? title : 'Shop'}</p>

        <NavLink to="/shop/men" className="link text-[1.6rem]">
          {/* TITLE FOR THE CART SHOP EX. (MEN , WOMEN etc...) */}
          {category}
        </NavLink>
      </div>
    </div>
  );
};

export default CardShop;
