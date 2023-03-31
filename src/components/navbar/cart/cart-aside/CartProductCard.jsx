import React from 'react';
import './CartProductCard.css';

const CartProductCard = ({ img, title, price, size }) => {
  return (
    <div className="grid grid-cols-12 w-full mb-2 relative overflow-hidden ">
      <div className="col-span-3">
        <img src={img} alt={title} className="w-[95%]" />
      </div>
      <div className="col-span-7">
        <p className="ellipsis-1-line mb-1">{title}</p>
        <p className="text-purpleNavy">₱{price.toLocaleString()}</p>
        <p>Size: {size}</p>

        <div className="mt-10">
          <button className="text-xl w-8 h-8 mr-4">-</button>
          <input type="number" className="" />
          <button className="">+</button>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
