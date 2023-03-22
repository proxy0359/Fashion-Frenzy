import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const SlickCarousel = (props) => {
  const settings = {
    slidesToShow: 4,

    nextArrow: <LeftArrow />,
    prevArrow: <RightArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,

          infinite: true,
        },
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 2,

          infinite: true,
        },
      },
      {
        breakpoint: 620,
        settings: {
          dots: true,
          slidesToShow: 1,
          infinite: true,
        },
      },
    ],

    slidesToScroll: 1,
  };

  return (
    <>
      <Slider
        className={`${props.className} flex ml-10 max-sm:ml-0`}
        {...settings}
      >
        {props.children}
      </Slider>
    </>
  );
};

export default SlickCarousel;
