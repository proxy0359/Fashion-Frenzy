import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';
import Backdrop from '../UI/Backdrop';
import SideDrawer from './SideDrawer';
import AsideLinks from './AsideLinks';

import './MainNav.css';

// ----- NAVBAR -------------
const MainNav = () => {
  const [showSide, setShowSide] = useState(false);

  const sideHandler = () => {
    setShowSide(!showSide);
  };

  return (
    <>
      {showSide ? (
        <>
          <Backdrop onClick={sideHandler} />
        </>
      ) : null}

      <nav className="flex nav max-lg:justify-between  ">
        <NavLink to="/" className=" max-sm:!flex-shrink shrink-0 ">
          <h1 className=" block   bg-black text-white p-5 px-7 mr-10 logo-text cursor-pointer ">
            Fashion Frenzy
          </h1>
        </NavLink>

        {/* ALL THE NAVIGATION LINKS */}

        <NavLinks openSide={sideHandler} sideActive={showSide} />
        <SideDrawer
          show={showSide}
          className="  px-5 pt-8 pt-10 pb-12  overflow-y-scroll"
        >
          <AsideLinks />
        </SideDrawer>
      </nav>
    </>
  );
};

export default MainNav;
