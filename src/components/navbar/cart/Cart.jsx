import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = () => {
  return (
    <div className="pr-4 flex-shrink-0">
      <FontAwesomeIcon
        icon={faCartShopping}
        size="1x"
        className="cursor-pointer text-2xl"
      />
      <span className="cartAmount">1</span>
    </div>
  );
};

export default Cart;
