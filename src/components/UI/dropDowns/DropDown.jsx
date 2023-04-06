import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import DropDownItems from './DropDownItems';

const DropDown = ({ title, items }) => {
  const [dropDown, setDropdown] = useState(false);

  const dropdownHandler = () => setDropdown((dropdown) => !dropdown);

  return (
    <div className="bg-white text-black  w-full mb-4 ">
      <button
        className=" flex justify-between p-8 w-full"
        onClick={dropdownHandler}
      >
        {title}
        {dropDown ? (
          <FontAwesomeIcon icon={faX} />
        ) : (
          <FontAwesomeIcon icon={faPlus} />
        )}
      </button>
      {dropDown ? <DropDownItems items={items} /> : null}
    </div>
  );
};

export default DropDown;
