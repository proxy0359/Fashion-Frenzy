import React from 'react';

const DropDownItems = ({ items }) => {
  return (
    <ul className="flex-col">
      {items.map((item) => (
        <li className="">{item} </li>
      ))}
    </ul>
  );
};

export default DropDownItems;
