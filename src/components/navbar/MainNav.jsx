import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';
import Backdrop from '../UI/Backdrop';
import SideDrawer from './SideDrawer';
import AsideLinks from './AsideLinks';
import { useSelector, useDispatch } from 'react-redux';
import { UiAction } from '../../store/ui-slice';

import CartAside from './cart/cart-aside/CartAside';

import './MainNav.css';

// ----- NAVBAR -------------
const MainNav = () => {
  const [showSide, setShowSide] = useState(false);

  const dispatch = useDispatch();

  const showCart = useSelector((state) => state.ui.showCart);

  // HAMBURGER NAVBAR HANDLER
  const sideHandler = () => {
    setShowSide(!showSide);
  };

  // CARTSIDE HANDLER
  const cartSideHandler = () => {
    dispatch(UiAction.toggleCart());
  };

  return (
    <>
      {/* Hamburger menu backdrop */}
      {showSide ? <Backdrop onClick={sideHandler} /> : null}
      {showCart ? <Backdrop onClick={cartSideHandler} /> : null}

      <nav className="flex nav max-lg:justify-between  ">
        <NavLink to="/" className=" max-sm:!flex-shrink shrink-0 ">
          <h1 className=" block   bg-black text-white p-5 px-7 mr-10 logo-text cursor-pointer ">
            Fashion Frenzy
          </h1>
        </NavLink>

        {/* CART DRAWER */}
        <SideDrawer show={showCart} className="z-[70]">
          <CartAside />
        </SideDrawer>

        {/* ALL THE NAVIGATION LINKS DRAWER*/}

        <NavLinks
          openSide={sideHandler}
          sideActive={showSide}
          showSide={showSide}
        />
        <SideDrawer
          show={showSide}
          className=" z-[70]  px-5  pt-10 pb-12  overflow-y-scroll"
        >
          <AsideLinks onClick={sideHandler} />
        </SideDrawer>
      </nav>
    </>
  );
};

export default MainNav;
