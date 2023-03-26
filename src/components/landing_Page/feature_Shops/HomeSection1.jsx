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
      <div className="  w-full py-4 mb-10 h-full max-sm:mb-3  ">
        <SlickCarousel>
          <CardShop
            category="Men's"
            img="https://cdn.shopify.com/s/files/1/1074/5128/collections/vb1939784_SS22_spring_knits-1_360x.jpg?v=1675771125"
            to="/men"
          />
          <CardShop
            category="Women's"
            img="https://cdn.shopify.com/s/files/1/1074/5128/collections/vb1939927_SS22_spring_knits-37_360x.jpg?v=1675771125"
            to="/women"
          />
          <CardShop
            category="Changing Robes"
            img="https://cdn.shopify.com/s/files/1/1074/5128/collections/vb1935538_SS22_spring_accessories-95_360x.jpg?v=1675771124"
          />
          <CardShop
            category="New Arrivals"
            img="https://cdn.shopify.com/s/files/1/1074/5128/collections/collection-header-new-arrivals_360x.jpg?v=1675771126"
          />
          <CardShop category="New Arrivals" />
        </SlickCarousel>
      </div>
    </section>
  );
};

export default HomeSection1;
