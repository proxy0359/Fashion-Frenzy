import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Star = ({ yellow }) => {
  return (
    <FontAwesomeIcon
      icon={faStar}
      className={yellow ? 'text-yellow-300' : ''}
    />
  );
};

export default Star;
