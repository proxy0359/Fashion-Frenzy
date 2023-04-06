import React from 'react';

const TenPercentOffCode = () => {
  return (
    <>
      <h3 className="h3 mb-20">10% Off Code</h3>
      <div className="grid grid-cols-12">
        <div className="col-span-6 col-start-4 max-md:col-span-12 max-lg:col-start-5 ">
          <p className="mb-4">
            The welcome offer is for customers who newly sign up to receive our
            newsletter and excludes customers who are already opted in to
            receiving emails from Fashion Frenzy
          </p>
          <p className="mb-4">
            10% discount available on a single full price purchase. It excludes
            non-Fashion Frenzy branded products such as Literature, GuppyFriend
            Washing Bag, NIKWAX and Sex Wax.
          </p>
          <p className="mb-4">
            The Offer is not transferable, there is no cash alternative and is
            valid for one transaction only.
          </p>
          <p className="mb-4">
            To redeem the Offer simply use the promo code as listed on your
            email in your shopping bag online
          </p>
          <p className="mb-4">
            The Offer cannot be used on any sale or reduced items, or in
            conjunction with any other offer or promotion, and is not valid for
            gift card purchases.
          </p>
        </div>
      </div>
    </>
  );
};

export default TenPercentOffCode;
