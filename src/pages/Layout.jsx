import React, { useEffect } from 'react';
import MainNav from '../components/navbar/MainNav';
import Footer from '../components/footer/Footer';
import { useLocation } from 'react-router';

import { Outlet } from 'react-router';

const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
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
