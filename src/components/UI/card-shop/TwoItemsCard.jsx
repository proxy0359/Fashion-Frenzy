import React from 'react';
import TwoItemsCarouselCard from '../carousel/TwoItemsCarouselCard.jsx';
import './TwoItemsCard.jsx';

const TwoItemsCard = (props) => {
  return (
    <div
      className="overflow-hidden w-[842px]  max-sm:m-auto relative"
      style={props.style}
    >
      <div className="hover:scale-105 transform ease-in-out duration-200 ">
        {/* IMAGE SHOULD HAVE A PROP  */}

        <img src={props.img} alt={props.title} className="w-[842px] " />

        <TwoItemsCarouselCard
          title={props.title}
          description={props.description}
          buttonTitle={props.buttonTitle}
          to={props.to}
        />
      </div>
    </div>
  );
};

export default TwoItemsCard;
