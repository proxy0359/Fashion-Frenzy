import React from 'react';

import './Cart.css';

const Cart = ({ onClick }) => {
  return (
    <div className="pr-4">
      <span className="relative block cursor-pointer " onClick={onClick}>
        <img
          src="//cdn.shopify.com/s/files/1/1074/5128/t/665/assets/icon-basket.svg?v=96871167749092254631665393261"
          loading="lazy"
          alt="Basket"
          width="27"
          height="35"
        />

        <span className="absolute number1">0</span>
      </span>
    </div>
  );
};

export default Cart;
