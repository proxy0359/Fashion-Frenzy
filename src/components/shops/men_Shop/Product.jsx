import React from 'react';

import { useParams } from 'react-router';
import { MEN_SHIRTS } from '../../../assets/Dummy_Data';
import { NavLink } from 'react-router-dom';
import ProductCard from './ProductCard';

const MenProduct = () => {
  const id = useParams().mId;
  console.log(id);
  const product = MEN_SHIRTS.find((item) => item.id === id);

  return (
    <section className="">
      <p className="mx-10 my-6">
        <NavLink to={'/men'}>men </NavLink>
        {` / ${product.name}`}
      </p>

      <div className="grid grid-cols-12 mx-10">
        <div className="col-span-6">
          <ProductCard
            img={product.image1}
            title={product.name}
            tags={product.tags}
          />
        </div>
        <div className="col-span-4 pt-10 pb-4">
          <h3 className="h3 mb-4">{product.name}</h3>
          <span className="text-purpleNavy mb-2 md:mb-4">
            ₱{product.price.toLocaleString()}
          </span>
        </div>
      </div>
    </section>
  );
};

export default MenProduct;
