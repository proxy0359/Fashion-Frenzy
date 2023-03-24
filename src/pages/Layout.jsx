import React from 'react';
import MainNav from '../components/navbar/MainNav';
import Footer from '../components/footer/Footer';

import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
      <header>
        <MainNav />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
