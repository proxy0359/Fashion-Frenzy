import React from 'react';
import DropDown from '../../UI/dropDowns/DropDown';

const ProductCareRepairs = () => {
  return (
    <div>
      <h3 className="h3 my-8"> Product Care </h3>
      <DropDown
        title="If my coat needs re-proofing, how do I do this and what can I use?"
        items={[
          'We recommend using a Nikywax product, should your coat need a reproof/ or just some general TLC. Great products, all FC free. Dependent on your jacket and the fabric, you may need to wash the item according to the instruction provided by Nik-Wax.',
          'Alternatively, we do offer a reproofing/wash service, for ₱1000 at our Fashion Frenzy HQ.',
        ]}
      />
      <DropDown
        title="How do I wash and care for my wool products?"
        items={[
          ' Caring for your wool properly is key to ensure its lengthy life span. We advise to wash all wool products on a 30-degree, gentle spin/wool cycle. The garment should then be laid flat to dry and can be re-shaped when damp if needed. If ever in doubt, all washing instructions are on the label inside your item.',
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

export default ProductCareRepairs;
