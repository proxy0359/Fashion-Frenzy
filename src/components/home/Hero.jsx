import React from 'react';
import heroVideo from '../../assets/background-Videos/heroVideo.mp4';
import './Hero.css';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero mb-14">
      <video src={heroVideo} autoPlay loop muted></video>
      <div className="overlay">
        <div className="content mt-20  flex-shrink-0">
          <h1 className="font-semibold w-7/12  text-white self-start max-lg:w-8/12 text-[40px] max-md:text-[25px] max-sm:w-11/12 max-sm:text-center max-sm:w-10/12">
            Fashion is the armor to survive the reality of everyday life.
          </h1>
          <div className="flex mt-8 self-start flex-wrap max-sm:justify-center">
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
            <NavLink
              to="/shop/women"
              className=" block bg-[#e7ddbb] text-black  button min-w-[12.5rem] md:min-w-[13rem]   mb-4 lg:mb-0 mr-8 max-md:h-14"
            >
              Join The Adventure
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
