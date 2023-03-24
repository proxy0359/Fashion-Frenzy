import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import TwoItemsCarouselCard from './TwoItemsCarouselCard';
import './TwoItemsCarousel.css';

const RightArrow = ({ onClick }) => {
  return (
    <div
      className="button  bg-[#e7ddbb] w-fit cursor-pointer z-[1] absolute top-[0%] right-0 "
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={faArrowRight}
        className={`${
          onClick !== null ? 'hidden' : ''
        }text-black block text-purpleNavy text-lg`}
      />
    </div>
  );
};

const TwoItemsCarousel = (props) => {
  const settings = {
    variableWidth: true,
    adaptiveHeight: true,

    slidesToShow: 1,

    nextArrow: <RightArrow />,

    responsive: [
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 0.5,

          infinite: true,
        },
      },
    ],

    slidesToScroll: 1,
  };

  return (
    <>
      <Slider className={`${props.className}  max-sm:ml-0 `} {...settings}>
        {props.children}
      </Slider>
    </>
  );
};

export default TwoItemsCarousel;
