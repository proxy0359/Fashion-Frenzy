import React from 'react';

const Promotions = () => {
  return (
    <>
      <h3 className="h3 mb-20">Promotions</h3>
      <div className="grid grid-cols-12">
        <div className="col-span-6 col-start-4 max-md:col-span-12 max-lg:col-start-5 ">
          <p className="mb-4">
            Please find the terms and conditions of our current promotions
            below. All of our promotion are valid in store and online unless
            otherwise stated.
          </p>
          <p className="mb-4">
            Please note some products are exempt from promotions and discount
            code use. These include non-fashion frenzy branded products such as
            Literature, GuppyFriend Washing Bag, NIKWAX, Sex Wax.
          </p>
        </div>
      </div>
    </>
  );
};

export default Promotions;
