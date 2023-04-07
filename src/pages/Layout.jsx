import React, { useEffect } from 'react';
import MainNav from '../components/navbar/MainNav';
import Footer from '../components/footer/Footer';
import { useDispatch } from 'react-redux';
import { UiAction } from '../store/ui-slice';

import { useLocation } from 'react-router';

import { Outlet } from 'react-router';

const Layout = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(UiAction.toggleCart({ bool: false }));
    window.scrollTo(0, 0);
    console.log(location);
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
