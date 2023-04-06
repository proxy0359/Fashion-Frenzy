import React from 'react';
import TermsAndConditionParagraphs from './termsAndCondition/TermsAndConditionParagraphs';
import Promotions from './termsAndCondition/Promotions';
import Sale from './termsAndCondition/Sale';
import TenPercentOffCode from './termsAndCondition/TenPercentOffCode';
import MultiBuyBundles from './termsAndCondition/MultiBuyBundles';

const TermsAndCondition = () => {
  return (
    <div className="px-8 w-full my-4">
      <h1 className="h1 mb-20">Terms & Conditions </h1>
      <div className="grid grid-cols-12 mb-20">
        <div className="col-span-6 col-start-4 max-lg:col-start-5 max-md:col-start-1  max-md:col-span-12">
          <TermsAndConditionParagraphs />
        </div>
      </div>

      <Promotions />
      <Sale />
      <TenPercentOffCode />
      <MultiBuyBundles />
    </div>
  );
};

export default TermsAndCondition;
