import React from 'react';
import Slider from 'react-slick';

import LeftArrow from './icons/LeftArrow';
import RightArrow from './icons/RightArrow';

const SlickCarousel = (props) => {
  const settings = {
    slidesToShow: props.slidesToShow || 4,
    variableWidth: true,
    infinite: true,
    adaptiveHeight: true,

    nextArrow: <LeftArrow className="top-[35%]" />,
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
        breakpoint: 930,
        settings: {
          slidesToShow: 1,

          infinite: true,
        },
      },
      {
        breakpoint: 620,
        settings: {
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
        className={`${props.className} flex mx-5 max-sm:ml-0`}
        {...settings}
      >
        {props.children}
      </Slider>
    </>
  );
};

export default SlickCarousel;
