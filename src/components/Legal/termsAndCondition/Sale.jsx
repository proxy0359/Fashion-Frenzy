import React from 'react';

const Sale = () => {
  return (
    <>
      <h3 className="h3 mb-20">Sale</h3>
      <div className="grid grid-cols-12">
        <div className="col-span-6 col-start-4 max-md:col-span-12 max-lg:col-start-5 ">
          <p className="mb-4">
            During a sale period no other offers or promotion codes may be used.
            Sale may exclude swimwear, collaborations and non-fashion frenzy
            branded products. Pricing cannot be retrospectively honoured on past
            orders. Applicable on items purchased within sale period.
          </p>
          <p className="mb-4">
            Next day shipping services are unavailable during our sale periods
            due to the high volume of orders being processed. You may experience
            slight delays in shipping times for online orders.
          </p>
        </div>
      </div>
    </>
  );
};

export default Sale;
