import React from 'react';
import './HomeSection1';
import Slider from 'react-slick';
import CardShop from '../UI/card-shop/CardShop';

const HomeSection1 = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    centerMode: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
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
    <section className="overflow-hidden mb-36 h-full">
      <div className="grid grid-cols-12 gap-4  ml-10">
        <div className="col-span-8 max-md:col-span-9 max-sm:col-span-11">
          <h1 className=" mb-3 md:mb-7 max-md:text-[2rem] max-sm:text-[1.5rem]">
            Tailored for the journey, designed for adventure.
          </h1>
        </div>
      </div>
      <div className=" w-full py-4 mb-10 h-full max-sm:m-auto">
        <Slider {...settings} className="flex ml-10 max-sm:ml-0">
          <CardShop />

          <CardShop />
          <CardShop />
          <CardShop />
          <CardShop />
          <CardShop />
        </Slider>
      </div>
    </section>
  );
};

export default HomeSection1;
