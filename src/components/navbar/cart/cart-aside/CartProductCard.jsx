import React from 'react';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../../../store/cart-slice';
import './CartProductCard.css';

const CartProductCard = ({ img, title, price, size, amount, id, product }) => {
  const dispatch = useDispatch();
  const increaseItemHandler = () => {
    dispatch(cartAction.addItem({ product, size }));
  };

  const removeItemHandler = () => {
    console.log(id, size);
    dispatch(cartAction.removeItem({ id, size }));
  };

  const instantRemoveItemHandler = () => {
    dispatch(cartAction.removeInstant({ id, size }));
  };

  return (
    <div className="grid grid-cols-12 w-full mb-2 relative overflow-hidden ">
      <div className="col-span-3">
        <img src={img} alt={title} className="w-[95%]" />
      </div>
      <div className="col-span-7">
        <p className="ellipsis-1-line mb-1">{title}</p>
        <p className="text-purpleNavy">₱{price.toLocaleString()}</p>
        <p>Size: {size}</p>

        <div className="mt-10 flex justify-center w-min items-center border border-solid border-black">
          <button className="text-lg w-8 h-8 mr-1" onClick={removeItemHandler}>
            -
          </button>
          {amount}
          <button
            className="text-lg w-8 h-8 ml-1"
            onClick={increaseItemHandler}
          >
            +
          </button>
        </div>
      </div>

      {/* CLEAR AMOUNT BUTTON */}
      <div className="col-span-2 flex justify-end items-start">
        <button className="block">
          <img
            src="//cdn.shopify.com/s/files/1/1074/5128/t/665/assets/icon-close.svg?v=65803610500005314941665393263"
            className="max-w-none"
            loading="lazy"
            alt="Close"
            width="25"
            height="25"
            onClick={instantRemoveItemHandler}
          />
        </button>
      </div>
    </div>
  );
};

export default CartProductCard;
