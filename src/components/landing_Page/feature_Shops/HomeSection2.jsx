import React from 'react';
import section2Video from '../../../assets/background-Videos/section2Video.mp4';
import SlickCarousel from '../../UI/SlickCarousel';
import CardShop from '../../UI/card-shop/CardShop';
import { MEN_SHIRTS, WOMEN_SHIRTS } from '../../../assets/Dummy_Data';
import './HomeSection2.css';

import { NavLink } from 'react-router-dom';

const HomeSection2 = () => {
  return (
    <section className="grid-cols-12 pb-14 lg:pb-18 mx-auto m-w-[1800px]">
      <div className="flex items-end md:items-center col-span-4 md:col-span-12 h-[40rem] md:h-160 xl:h-202 relative mb-20">
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
              <h1 className="font-semibold w-4/12  text-white self-start max-lg:w-5/12 text-[40px] max-md:text-[25px]  max-sm:text-center max-sm:w-10/12">
                Women Of The Sea Claiming Our Space
              </h1>
              <div className="flex mt-8 self-start flex-wrap max-sm:justify-center max-sm:pr-8">
                <NavLink
                  to="/impact"
                  className=" block bg-[#e7ddbb] text-black  button min-w-[12.5rem] md:min-w-[13rem]   mb-4 lg:mb-0 mr-8  max-md:h-14 "
                >
                  Discover More
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
            {MEN_SHIRTS.slice(0, 2)
              .map((item) => (
                <CardShop
                  key={item.id}
                  to="/men"
                  img={item.image1}
                  img2={item.image2}
                  tagVersion={true}
                  tags={item.tags}
                  title={item.name}
                  price={item.price.toLocaleString('en-US')}
                />
              ))
              .concat(
                WOMEN_SHIRTS.slice(0, 2).map((item) => (
                  <CardShop
                    key={item.id}
                    to="/women"
                    img={item.image1}
                    img2={item.image2}
                    tagVersion={true}
                    tags={item.tags}
                    title={item.name}
                    price={item.price.toLocaleString('en-US')}
                  />
                ))
              )}
          </SlickCarousel>
        </div>
      </section>
    </section>
  );
};

export default HomeSection2;
