import React from 'react';
import MainNav from '../components/navbar/MainNav';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
      <MainNav />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
