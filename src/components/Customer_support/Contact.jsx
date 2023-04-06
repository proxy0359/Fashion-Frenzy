import React from 'react';
import DropDown from '../UI/dropDowns/DropDown';

const Contact = () => {
  return (
    <div className="lg:mt-10">
      <h1 className="h1 mb-10 max-lg:ml-4 max-lg:mt-10">Contact</h1>
      <div>
        <DropDown
          title="Contact us"
          items={[
            'The best way of contacting us is via email : hello@fashionfrenzy.com ',
            'Our Customer Service team is here on hand to answer your queries Monday-Friday 8.00am - 4.00pm.',
            'We aim to get back to you within 1 working day, and much quicker most of the time.',
            'You can also call us on 013533613722 or use our Livechat feature in the bottom right-hand side of the screen.',
            'For all media requests regarding the Fashion Frenzy brand, products and environmental efforts, please contact: press@fashionfrenzy.com',
          ]}
        />
        <DropDown
          title="Write to us"
          items={[
            ' 123 Main Street',
            'Barangay San Roque',
            'City of Manila',
            'Metro Manila 1001',
            'Philippines',
          ]}
        />
        <DropDown
          title="Returns"
          items={[
            'To find out more on Shipping and Returns, please visit our dedicated Shipping page and Returns page.',
            'For Returns, You can also email returns@fashionfrenzy.com and the Team will get back to you.',
          ]}
        />
      </div>
    </div>
  );
};

export default Contact;
