import React from 'react';
import DropDown from '../../UI/dropDowns/DropDown';

const Shipping = () => {
  return (
    <div>
      <h3 className="h3 my-8"> Shipping </h3>
      <DropDown
        title="PH Shipping Rates"
        items={[
          '₱200 Standard Shipping under ₱5000 - 3-5 working days* (during non strike periods)',
          'Our Customer Service team is here on hand to answer your queries Monday-Friday 8.00am - 4.00pm.',
          'Free Standard Shipping over ₱5000 - 3-5 working days* (during non strike periods)',
          '₱1000 Express Shipping (order before 1pm)- 24h to 48h',
          'Free Express Shipping (orders over £300) - 2-3 working days* (during non strike periods)',
        ]}
      />
      <DropDown
        title="International Shipping Rates"
        items={[
          ' we have partnered with Global E to offer a smooth global shipping and returns experience. The relevant International Shipping charge will display at checkout once you have added your Shipping Address.',
        ]}
      />
      <DropDown
        title="Repairs Shipping"
        items={[
          'Please note repairs purchased online are only available to customers in the PH at present.',
          'Both outbound and return postage is free for all repairs bought through our website. At checkout all repairs will have free shipping automatically applied. Please note if you have any other non-repair products in your basket they will be subject to our standard shipping rates.',
          'Once you have completed your checkout process you will receive a confirmation email that will contain a link to Royal Mail where you can print out your free postage label.',
        ]}
      />
    </div>
  );
};

export default Shipping;
