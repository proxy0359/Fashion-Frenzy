import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Star = ({ yellow, size, className }) => {
  return (
    <FontAwesomeIcon
      icon={faStar}
      className={`${yellow ? 'text-yellow-300' : ''} ${
        className ? className : ''
      }`}
      size={size}
    />
  );
};

export default Star;
