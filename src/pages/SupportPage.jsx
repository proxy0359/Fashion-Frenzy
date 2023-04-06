import React, { useEffect } from 'react';
import CustomerSupport from '../components/Customer_support/CustomerSupport';
import { Outlet, useNavigate } from 'react-router';

const SupportPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('contact');
  }, []);
  return (
    <>
      <CustomerSupport>
        <Outlet />
      </CustomerSupport>
    </>
  );
};

export default SupportPage;
