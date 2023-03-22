import React from 'react';
import Slider from 'react-slick';

const SlickCarousel = (props) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    centerMode: false,
    swipeToSlide: true,
    autoplay: true,

    autoplaySpeed: 3000,
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
