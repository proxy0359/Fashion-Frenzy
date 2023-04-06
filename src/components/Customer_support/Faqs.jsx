import React from 'react';
import Shipping from './dropDowns/Shipping';
import Returns from './dropDowns/Returns';

const Faqs = () => {
  return (
    <div className="lg:mt-10">
      <h1 className="h1 mb-10 max-lg:ml-4 max-lg:mt-10">FAQ's</h1>
      <div className="mx-4">
        <Shipping />
        <Returns />
      </div>
    </div>
  );
};

export default Faqs;
