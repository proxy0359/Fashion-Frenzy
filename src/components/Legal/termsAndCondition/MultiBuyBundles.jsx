import React from 'react';

const MultiBuyBundles = () => {
  return (
    <>
      <h3 className="h3 mb-20">Multi Buy Bundles</h3>
      <div className="grid grid-cols-12">
        <div className="col-span-6 col-start-4 max-md:col-span-12 max-lg:col-start-5 ">
          <p className="mb-4">
            Offer applicable on offers marked with the Buy X, get Y off banner.
            Simply put the correct number of items into your basket and the
            cheapest item will be have the discount removed. Applies to full
            priced product only and not applicable with any other offer.
          </p>
          <p className="mb-4">
            Returns of goods in the bundle will affect your refund amount. For
            example, if you return one of your bundle items you will be refunded
            the amount for that product, minus the value of the free product at
            the time you purchased it.
          </p>
        </div>
      </div>
    </>
  );
};

export default MultiBuyBundles;
