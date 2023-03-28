import React, { useState } from 'react';
import './BoxSizes.css';
const BoxSizes = ({ sizes, picked }) => {
  const [onSelect, setOnSelect] = useState({ index: null, selected: '' });

  const onSelectHandler = (index, size) => {
    setOnSelect({ index, selected: size });
    if (onSelect.index === index) {
      setOnSelect({ index: null, selected: '' });
    }
  };

  if (onSelect.selected.trim().length !== 0) {
    picked(onSelect.selected);
  } else {
    picked(null);
  }

  return (
    <>
      <p className="mb-4">
        {onSelect.selected
          ? `Selected Size: ${onSelect.selected}`
          : 'Select Size:'}
      </p>

      <ul className="flex flex-wrap mb">
        {sizes.map((size, index) => (
          <li className="cursor-pointer" key={size}>
            <div
              className={`box w-16 h-16  ${
                onSelect.index === index ? 'bg-[#e7ddbb]' : ''
              }`}
              onClick={() => onSelectHandler(index, size)}
            >
              {size}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BoxSizes;
