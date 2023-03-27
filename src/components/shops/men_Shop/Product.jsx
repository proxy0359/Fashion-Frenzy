import React from 'react';

import { useParams } from 'react-router';
import { MEN_SHIRTS } from '../../../assets/Dummy_Data';
import { NavLink } from 'react-router-dom';

const MenProduct = () => {
  const id = useParams().mId;
  console.log(id);
  const product = MEN_SHIRTS.find((item) => item.id === id);

  return (
    <section className="">
      <p className="ml-10 mt-3">
        <NavLink to={'/men'}>men </NavLink>
        {` / ${product.name}`}
      </p>
    </section>
  );
};

export default MenProduct;
