import React from 'react';
import section2Video from '../../../assets/background-Videos/section2Video.mp4';
import SlickCarousel from '../../UI/SlickCarousel';
import CardShop from '../../UI/card-shop/CardShop';
import './HomeSection2.css';

import { NavLink } from 'react-router-dom';

const HomeSection2 = () => {
  return (
    <section className="grid-cols-12 pb-14 lg:pb-18 mx-auto m-w-[1800px]">
      <div className="flex items-end md:items-center col-span-4 md:col-span-12 h-[40rem] md:h-160 xl:h-202 relative">
        <div className="flex-shrink-0">
          <video
            src={section2Video}
            autoPlay
            loop
            muted
            className="mx-auto inset-0 absolute block  w-full h-full object-cover "
          ></video>
          <div className="section2  z-10 absolute h-full">
            <div className="content mt-20  flex-shrink-0">
              <h1 className="font-semibold w-7/12  text-white self-start max-lg:w-8/12 text-[40px] max-md:text-[25px]  max-sm:text-center max-sm:w-10/12">
                Fashion is the armor to survive the reality of everyday life.
              </h1>
              <div className="flex mt-8 self-start flex-wrap max-sm:justify-center max-sm:pr-8">
                <NavLink
                  to="/shop/men"
                  className=" block bg-[#e7ddbb] text-black  button min-w-[12.5rem] md:min-w-[13rem]   mb-4 lg:mb-0 mr-8  max-md:h-14 "
                >
                  Men's New
                </NavLink>
                <NavLink
                  to="/shop/women"
                  className=" block bg-[#e7ddbb] text-black  button min-w-[12.5rem] md:min-w-[13rem]   mb-4 lg:mb-0 mr-8  max-md:h-14"
                >
                  Women's New
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="overflow-hidden  mt-4">
        <div className="grid grid-cols-12 gap-4  ml-10">
          <div className="col-span-8 max-md:col-span-9 max-sm:col-span-11">
            <h1 className=" mb-3 md:mb-5 max-md:text-[2rem] max-sm:text-[1.5rem]">
              Fashion Frenzy Favorites
            </h1>
          </div>
        </div>

        {/* CAROUSEL FOR PRODUCTS */}
        <div className=" w-full py-4 mb-10 h-full max-sm:mb-4 ">
          <SlickCarousel>
            <CardShop
              tagVersion={true}
              title="Nieuwland 2e Yulex® Long Sleeve Swimsuit"
              tags={[{ title: 'Best Seller' }]}
              price={6750}
            />
            <CardShop
              tagVersion={true}
              title="Nieuwland 2e Yulex® Long Sleeve Swimsuit"
              tags={[{ title: 'Best Seller' }, { title: 'New Arrivals' }]}
              price={5340}
            />
            <CardShop
              tagVersion={true}
              title="Nieuwland 2e Yulex® Long Sleeve Swimsuit"
              tags={[{ title: 'Best Seller' }]}
              price={4560}
            />
            <CardShop
              tagVersion={true}
              title="Nieuwland 2e Yulex® Long Sleeve Swimsuit"
              tags={[{ title: 'Best Seller' }]}
              price={3450}
            />
          </SlickCarousel>
        </div>
      </section>
    </section>
  );
};

export default HomeSection2;