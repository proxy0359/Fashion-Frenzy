import React from 'react';
import './FooterForm.css';
import RadioCheckBox from '../UI/RadioCheckBox';

const FooterForm = () => {
  const newsletterSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={newsletterSubmitHandler}>
      <span className="radio relative mr-5 mb-2">
        <input
          data-email=""
          type="email"
          name="email"
          placeholder="Your Email"
          autocomplete="off"
          className="w-full mb-5 p-4 border border-[black]  placeholder-[black] tracking-wider focus:outline-none"
        />
        <div className="flex  justify-between max-sm:flex-col mb-3">
          <div className="flex flex-wrap">
            <RadioCheckBox
              title="Menswear"
              id="--newsletter-form-men"
              value="men"
            />
            <RadioCheckBox
              title=" Womenswear "
              id="--newsletter-form-women"
              value="women"
            />
            <RadioCheckBox
              title="Both"
              id="--newsletter-form-both"
              value="both"
            />
          </div>
          <button
            type="submit"
            className="button bg-[#e7ddbb] w-max flex-shrink-0 max-sm:mt-8"
          >
            Join Now
          </button>
        </div>
      </span>
    </form>
  );
};

export default FooterForm;
