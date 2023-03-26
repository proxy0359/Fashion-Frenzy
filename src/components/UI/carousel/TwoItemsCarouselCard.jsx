import React from 'react';
import './TwoItemsCarouselCard.css';
import { NavLink } from 'react-router-dom';

const TwoItemsCarouselCard = ({ title, description, buttonTitle, to }) => {
  return (
    <div className="z-20 absolute bg-white w-7/12 h-auto top-1/2 sm:ml-10  max-sm:w-4/12 md:m-6/12 10 md:w-7/12 lg:w-5/12  hover:ml-[5rem] transform ease-in-out duration-200 ">
      <div className="p-5 lg:p-8 top-5  ">
        <h3 className="mb-2 lg:mb-3 ellipsis-1-line">{title}</h3>
        <p className="ellipsis-2-line mb-0 ">{description}</p>
      </div>
      <div>
        <NavLink to={to} className="  button bg-[#e7ddbb] w-max">
          {buttonTitle}
        </NavLink>
      </div>
    </div>
  );
};

export default TwoItemsCarouselCard;
