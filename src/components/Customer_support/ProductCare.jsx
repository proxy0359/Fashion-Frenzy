import React from 'react';
import ProductCareRepairs from './dropDowns/ProductCareRepairs';
import Repairs from './dropDowns/Repairs';

const ProductCare = () => {
  return (
    <div className="lg:mt-10">
      <h1 className="h1 mb-10 max-lg:ml-4 max-lg:mt-10">
        Product Care & Repairs
      </h1>
      <div className="mx-4">
        <ProductCareRepairs />
        <Repairs />
      </div>
    </div>
  );
};

export default ProductCare;
