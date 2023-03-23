import React from 'react';
import TwoItemsCarouselCard from '../carousel/TwoItemsCarouselCard.jsx';
import './TwoItemsCard.jsx';

const TwoItemsCard = (props) => {
  return (
    <div
      className="lg:overflow-hidden w-[842px] h-auto max-sm:m-auto relative"
      style={props.style}
    >
      <div className="hover:scale-105 transform ease-in-out duration-200 ">
        {/* IMAGE SHOULD HAVE A PROP  */}

        <img src={props.img} alt="asdf" className="w-[842px] h-[640px] " />

        <TwoItemsCarouselCard />
      </div>
    </div>
  );
};

export default TwoItemsCard;
