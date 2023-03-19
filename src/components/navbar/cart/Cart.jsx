import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = () => {
  return (
    <>
      <div>
        <FontAwesomeIcon
          icon={faCartShopping}
          size="2x"
          className="cursor-pointer"
        />
        <span className="cartAmount">1</span>
      </div>
    </>
  );
};

export default Cart;
