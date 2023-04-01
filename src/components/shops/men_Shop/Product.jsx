import React, { useState } from 'react';

import { useParams } from 'react-router';
import { MEN_SHIRTS } from '../../../assets/Dummy_Data';
import { NavLink } from 'react-router-dom';
import BoxSizes from '../../UI/product_sizes/BoxSizes';

import ProductCard from './ProductCard';
import ProductDescription from './ProductDescription';
import Rating from '../../UI/rating/Rating';

import { useDispatch } from 'react-redux';
import { cartAction } from '../../../store/cart-slice';

const MenProduct = () => {
  const [rating, setRating] = useState(0);
  const [pickedSize, setPickedSize] = useState('');

  const dispatch = useDispatch();

  const pickedSizeHandler = (size) => {
    setPickedSize(size);
  };

  // TO GET THE ID
  const id = useParams().mId;

  const product = MEN_SHIRTS.find((item) => item.id === id);

  // ADD TO CART HANDLER FUNCTION
  const addToCartHandler = (event) => {
    event.preventDefault();

    dispatch(cartAction.addItem({ product, size: pickedSize }));
    console.log(pickedSize);
  };

  return (
    <section className="max-sm:mt-14">
      <p className="mx-10 my-6">
        <NavLink to={'/men'}>men </NavLink>
        {` / ${product.name}`}
      </p>

      <div className="grid grid-cols-12 mx-10">
        {/* PRODUCT IMAGE */}
        <div className="col-span-6 max-md:col-span-12">
          <ProductCard
            img={product.image1}
            title={product.name}
            tags={product.tags}
          />
        </div>
        <div className="col-span-4 pt-10 pb-4  max-sm:col-span-10">
          <form onSubmit={addToCartHandler} className="w-full h-full">
            {/* PRODUCT NAME */}
            <h3 className="h3 mb-4">{product.name}</h3>

            {/* PRODUCT PRICE */}
            <span className="text-purpleNavy mb-2 md:mb-4 ">
              ₱{product.price.toLocaleString()}
            </span>

            {/* PRODUCT RATING */}
            <div className="mt-4 mb-11">
              <Rating rating={rating} onRating={(rate) => setRating(rate)} />
            </div>

            {/* PRODUCT SIZES */}
            <BoxSizes sizes={product.sizes} picked={pickedSizeHandler} />

            {/* PRODUCT ADD TO CART BUTTON */}
            <div className="w-full md:h-full flex items-center justify-start">
              <button
                className="button my-4 max-md:my-16  w-max cursor-pointer bg-black text-white "
                disabled={pickedSize ? false : true}
                type="submit"
              >
                {pickedSize
                  ? `Check Out : "${pickedSize}" size`
                  : 'Pick a size'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* PRODUCT DESCRIPTION */}
      <div className="grid grid-cols-12 ml-10 mt-8">
        <div className="col-span-5 max-sm:col-span-11 max-md:col-span-8">
          <ProductDescription />
        </div>
      </div>
    </section>
  );
};

export default MenProduct;
