import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const RightArrow = ({ onClick }) => {
  return (
    <div
      className="button  bg-[#e7ddbb] w-fit cursor-pointer z-[1] absolute top-[35%] right-[2%] "
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={faArrowRight}
        className={`${
          onClick === null ? 'hidden' : ''
        }text-black block text-purpleNavy text-lg`}
      />
    </div>
  );
};

export default RightArrow;
