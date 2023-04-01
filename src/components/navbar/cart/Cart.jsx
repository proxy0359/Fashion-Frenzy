import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UiAction } from '../../../store/ui-slice';

import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.cart.totalAmount);

  const showCartSide = () => {
    dispatch(UiAction.toggleCart());
  };

  return (
    <div className="pr-4">
      <span className="relative block cursor-pointer " onClick={showCartSide}>
        <img
          src="//cdn.shopify.com/s/files/1/1074/5128/t/665/assets/icon-basket.svg?v=96871167749092254631665393261"
          loading="lazy"
          alt="Basket"
          width="27"
          height="35"
        />

        <span
          className={`absolute number1 ${
            amount.toString().length >= 2 ? '!left-[5px]' : ''
          }`}
        >
          {amount}
        </span>
      </span>
    </div>
  );
};

export default Cart;
