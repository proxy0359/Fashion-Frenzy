import React from 'react';
import CustomerSupportAside from './CustomerSupportAside';

const CustomerSupport = ({ children }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 max-lg:col-span-12 mt-10 lg:ml-10 ml-4">
        <CustomerSupportAside />
      </div>
      <div className="col-span-11 lg:hidden my-4">
        <span className="mx-4 w-full h-px bg-richBlack inline-block border-b-black  " />
      </div>

      <div className="col-span-7 max-lg:col-span-12">{children}</div>
    </div>
  );
};

export default CustomerSupport;
