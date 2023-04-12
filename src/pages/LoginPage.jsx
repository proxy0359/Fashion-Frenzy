import React from 'react';
import Login from '../components/account/Login';
import { Outlet } from 'react-router';

const LoginPage = () => {
  return (
    <Login>
      <Outlet />
    </Login>
  );
};

export default LoginPage;
