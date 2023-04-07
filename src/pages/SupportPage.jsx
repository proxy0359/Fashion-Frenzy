import React from 'react';
import CustomerSupport from '../components/Customer_support/CustomerSupport';
import { Outlet } from 'react-router';

const SupportPage = () => {
  return (
    <>
      <CustomerSupport>
        <Outlet />
      </CustomerSupport>
    </>
  );
};

export default SupportPage;
