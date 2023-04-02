import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UiAction } from '../../../../store/ui-slice';
import CartProductCard from './CartProductCard';

import './CartAside.css';

const CartAside = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  const totalPrice = useSelector((state) => state.cart.totalPrice);

  //   TO CLOSE THE CART
  const closeCartSideHandler = () => {
    dispatch(UiAction.toggleCart());
  };

  return (
    <div className="cart-drawer-body hide-scrollbar  pt-4 px-4  h-full w-full relative">
      <div className="grid grid-cols-12 mb-4">
        <div className="col-span-12">
          {/* CLOSE CART BUTTON */}
          <button onClick={closeCartSideHandler}>
            <img
              src="//cdn.shopify.com/s/files/1/1074/5128/t/665/assets/icon-close.svg?v=65803610500005314941665393263"
              className="max-w-none"
              loading="lazy"
              alt="Close"
              width="25"
              height="25"
            />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12  cart-drawer-body hide-scrollbar border-t-2 border-black pt-4 ">
        {/* PRODUCT ITEMS HERE */}

        <div className="col-span-12 max-h-[20rem] ">
          {products.length === 0 ? (
            <div className="w-full  bg-white p-4">
              <p className="text-xl">Your basket is empty.</p>
            </div>
          ) : (
            products.map((product) => (
              <CartProductCard
                key={product.id}
                img={product.image1}
                price={product.price}
                size={product.size}
                title={product.name}
                amount={product.totalAmount}
                id={product.id}
                product={product}
              />
            ))
          )}
        </div>
      </div>
      <div className="grid grid-cols-12 border-t-2 pt-4 border-black">
        {/* PRICE TOTAL */}
        <div className=" col-span-12 flex justify-between">
          <p>Subtotal</p>
          <p>₱{totalPrice.toLocaleString()}</p>
        </div>
        {/* CHECKOUT BUTTON */}
        <div className="col-span-12 mt-4">
          <button className="button bg-black text-[white] w-8/12 max-md:w-full flex !justify-between  ">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartAside;
