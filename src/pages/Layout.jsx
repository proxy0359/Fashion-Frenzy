import React, { useEffect } from 'react';
import MainNav from '../components/navbar/MainNav';
import Footer from '../components/footer/Footer';
import ScrollToHash from '../helper/ScrollToHash';
import { useDispatch } from 'react-redux';
import { UiAction } from '../store/ui-slice';

import { useLocation } from 'react-router';

import { Outlet } from 'react-router';

const Layout = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(UiAction.toggleCart({ bool: false }));
  }, [location]);
  return (
    <>
      <header>
        <MainNav />
      </header>
      <main>
        <Outlet />
        <ScrollToHash />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
