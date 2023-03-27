import React from 'react';
import { WOMEN_SHIRTS } from '../../../../assets/Dummy_Data';
import { useParams } from 'react-router';

import './Product.css';
import { NavLink } from 'react-router-dom';

const WomenProduct = () => {
  const id = useParams().wId;
  const product = WOMEN_SHIRTS.find((item) => item.id === id);
  return (
    <section className="">
      <p className="ml-10 my-3">
        <NavLink to={'/women'}>women </NavLink>
        {`/ ${product ? product.name : ''}`}
      </p>
    </section>
  );
};

export default WomenProduct;
