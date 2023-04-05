import React from 'react';
import './ImpactImage.css';

const ImpactImage = ({ img, alt, title }) => {
  return (
    <div className="flex justify-start items-end relative w-full h-full ">
      <img src={img} alt={alt ? alt : ''} />
      <h1 className="h1 absolute text-[white]  ml-10 mb-20 z-10 max-md:!text-[2.5rem] max-sm:!text-[1.7rem] max-md:ml-7 max-md:mb-10 w-[40rem] max-md:w-[25rem] max-sm:w-[15rem]">
        {title}
      </h1>
      <div className="__background  "></div>
    </div>
  );
};

export default ImpactImage;
