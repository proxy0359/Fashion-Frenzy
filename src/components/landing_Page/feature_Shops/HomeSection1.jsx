import React from 'react';
import './HomeSection1';
import CardShop from '../../UI/card-shop/CardShop';
import SlickCarousel from '../../UI/SlickCarousel';

const HomeSection1 = () => {
  return (
    <section className="overflow-hidden  ">
      <div className="grid grid-cols-12 gap-4  ml-10">
        <div className="col-span-8 max-md:col-span-9 max-sm:col-span-11">
          <h1 className=" mb-3 md:mb-5 max-md:text-[2rem] max-sm:text-[1.5rem]">
            Tailored for the journey, designed for adventure.
          </h1>
        </div>
      </div>
      <div className=" w-full py-4 mb-10 h-full max-sm:m-auto">
        <SlickCarousel>
          <CardShop category="Men's" />
          <CardShop category="Women's" />
          <CardShop category="Changing Robes" />
          <CardShop category="New Arrivals" />
        </SlickCarousel>
      </div>
    </section>
  );
};

export default HomeSection1;
