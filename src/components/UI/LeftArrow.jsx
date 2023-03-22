import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const LeftArrow = ({ onClick }) => {
  return (
    <div
      className="button bg-[#e7ddbb] w-fit cursor-pointer z-[1] absolute top-[35%]"
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={faArrowLeft}
        className={`${
          onClick === null ? 'hidden' : ''
        }text-black block text-purpleNavy text-lg`}
      />
    </div>
  );
};

export default LeftArrow;
