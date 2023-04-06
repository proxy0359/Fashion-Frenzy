import React from 'react';
import DropDown from '../../UI/dropDowns/DropDown';

const Returns = () => {
  return (
    <div>
      <h3 className="h3 my-8"> Return </h3>
      <DropDown
        title="Not sure on your item and need to return it?"
        items={[
          'We hope that you are happy with your purchase from us but understand if you need to return your items. We can offer a refund on items returned in an unworn condition with the tags intact within 28 days of delivery. Proof of purchase must be provided for us to process a refund. Any items received in a non-sellable condition will not be accepted.',
          'Please ensure that you return the goods to us folded and in their original packaging.- 4.00pm.',
          'If you have received an item from Fashion Frenzy as a gift. Please reach out to returns@fasionfrenzy.com and the Team will resolve this for you.',
          'If you need assistance, please contact returns@fashionfrenzy.com and our team will be happy to advise.',
        ]}
      />
      <DropDown
        title="How can I Return?"
        items={[
          `' We offer a free returns service for customers within the UK. You’ll need your order number to complete this. Head over to https://fashionFrenzy.com/returns-portal and follow the on-page instructions. Once you 've completed this we'  'll send your shipping label and instructions via email. There is no need to print anything. Just take your packed return to any Royal Mail drop-off Location. Show a store associate your QR code, and they 'll take care of the rest.'`,
          "For International orders placed after 11th October 2022, please head over to this portal and follow the on-page instructions. You'll need your order number starting with # and email address to complete this.",
        ]}
      />
      <DropDown
        title="How do I exchange my item?"
        items={[
          'If you wish to exchange something in your order please re-order the new item, and return the original to us for a refund.',
          'Unfortunately we do not as yet offer an exchange service for international customers. If you are based outside of the UK and wish to exchange something in your order please re-order the new item, and return the original to us for a refund.',
        ]}
      />
      <DropDown
        title="How long will it take for me to get my refund/exchange?"
        items={[
          'Your return/exchange will take up to a week to be completed. However, in busier periods it will take up to 14 days to be processed from the day it is put in the post.',
        ]}
      />
      <DropDown
        title="There is a problem with my order. What should I do?"
        items={[
          'Thorough checks are made before items leave us, but if you have received your order and there is a fault with any items, either email hello@fashionfrenzy.com or give us a call 013533613722 and we will resolve this for you.',
        ]}
      />
    </div>
  );
};

export default Returns;
