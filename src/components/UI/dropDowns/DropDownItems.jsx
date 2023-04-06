import React from 'react';

const DropDownItems = ({ items }) => {
  return (
    <ul className="flex-col p-8">
      {items.map((item, i) => (
        // I SHOULD CHANGE THIS IN FUTURE BECAUSE USING INDEX AS A KEY IS A BAD PRACTICE
        <li className="mb-4" key={i}>
          {item}{' '}
        </li>
      ))}
    </ul>
  );
};

export default DropDownItems;
