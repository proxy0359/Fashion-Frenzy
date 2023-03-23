import React from 'react';
import './TwoItemsCarouselCard.css';
import { NavLink } from 'react-router-dom';

const TwoItemsCarouselCard = () => {
  return (
    <div className="z-20 absolute bg-white w-auto h-auto top-1/2 ml-10  md:ml-10 md:w-7/12 lg:w-5/12 ">
      <div className="p-5 lg:p-8 top-5  ">
        <h3 className="mb-2 lg:mb-3 ellipsis-1-line">Lived and Loved</h3>
        <p className="ellipsis-2-line mb-0">
          Because the most sustainable product is the one you already own.
        </p>
      </div>
      <div>
        <NavLink to="/shop" className="  button bg-[#e7ddbb] w-max">
          Discover more
        </NavLink>
      </div>
    </div>
  );
};

export default TwoItemsCarouselCard;
