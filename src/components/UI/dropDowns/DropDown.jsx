import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import DropDownItems from './DropDownItems';

const DropDown = ({ title, items }) => {
  const [dropDown, setDropdown] = useState(false);

  const dropdownHandler = () => setDropdown((dropdown) => !dropdown);

  return (
    <div className="bg-white text-black py-4">
      <div className="  flex justify-between">
        <p>{title}</p>
        {dropDown ? (
          <FontAwesomeIcon icon={faX} />
        ) : (
          <FontAwesomeIcon icon={faPlus} />
        )}
      </div>
      {dropDown ? <DropDownItems items={props.items} /> : null}
    </div>
  );
};

export default DropDown;
