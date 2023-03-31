import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UiAction } from '../../../../store/ui-slice';
import CartProductCard from './CartProductCard';

import './CartAside.css';

const CartAside = () => {
  const dispatch = useDispatch();

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
              class="max-w-none"
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
          <CartProductCard
            img="https://cdn.shopify.com/s/files/1/1074/5128/collections/collection-header-mens-new-arrivals_360x.jpg?v=1675771263"
            price={2000}
            size="S"
            title="something"
          />
          <CartProductCard
            img="https://cdn.shopify.com/s/files/1/1074/5128/collections/collection-header-mens-new-arrivals_360x.jpg?v=1675771263"
            price={2000}
            size="S"
            title="something"
          />
          <CartProductCard
            img="https://cdn.shopify.com/s/files/1/1074/5128/collections/collection-header-mens-new-arrivals_360x.jpg?v=1675771263"
            price={2000}
            size="S"
            title="something"
          />
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
