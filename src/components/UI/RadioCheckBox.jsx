import React from 'react';
import './RadioCheckBox.css';

const RadioCheckBox = ({ title, id, value }) => {
  return (
    <span className="radio relative mr-5 mb-2">
      <input
        type="radio"
        value={value}
        name="gender-radio"
        id={id}
        className="hidden"
      />
      <label className="ml-10 cursor-pointer" htmlFor={id}>
        {title}
      </label>
    </span>
  );
};

export default RadioCheckBox;
