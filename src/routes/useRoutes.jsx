import React, { useEffect } from 'react';
import {
  createRoutesFromElements,
  Route,
  Navigate,
  useLocation,
} from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout';
import LandingPage from '../pages/LandingPage';

import ImpactPage from '../pages/ImpactPage';

// ACCOUNT IMPORTS
import AccountPage from '../pages/AccountPage';
import LoginForm from '../components/account/LoginForm';
import ForgotPassword from '../components/account/ForgotPassword';
import Register from '../components/account/Register';
import LoginPage from '../pages/LoginPage';

// LEGAL IMPORTS
import TermsAndConditions from '../pages/TermsAndConditions';

// SUPPORT IMPORTS
import SupportPage from '../pages/SupportPage';
import Contact from '../components/Customer_support/Contact';
import Faqs from '../components/Customer_support/Faqs';
import ProductCare from '../components/Customer_support/ProductCare';

// ABOUT IMPORT
import AboutPage from '../pages/AboutPage';

// WOMEN IMPORTS

import WomenProduct from '../components/shops/women_shop/product_page/Product';
import WomenShop from '../pages/WomenShop';
import { default as WomenMainShop } from '../components/shops/women_shop/MainShop';

// MEN IMPORTS

import MainShop from '../components/shops/men_Shop/MainShop';
import MensShop from '../pages/MensShop';
import MenProduct from '../components/shops/men_Shop/Product';

// ERRORS IMPORTS

import PageNotFound from '../components/errors/PageNotFound';

// LOADERS

const useRoutes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" />} />

        {/* HOME PAGE ROUTE */}
        <Route path="/home" element={<LandingPage />} />

        {/* TERMS AND CONDITIONS ROUTE */}
        <Route path="/terms-and-condition" element={<TermsAndConditions />} />

        {/* ABOUT ROUTE */}
        <Route path="/about" element={<AboutPage />} />

        {/* ACCOUNT ROUTE */}
        <Route path="/account/*" element={<AccountPage />}>
          <Route index element={<Navigate to="login" />} />
          <Route path="login" element={<LoginPage />}>
            <Route index element={<LoginForm />} />
            <Route path="recover" element={<ForgotPassword />} />
          </Route>
          <Route path="register" element={<Register />} />
        </Route>

        {/* IMPACT ROUTE*/}
        <Route path="/impact" element={<ImpactPage />} />

        {/* SUPPORTS ROUTES */}
        <Route path="/support/*" element={<SupportPage />}>
          <Route index element={<Navigate to="contact" />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="product&repairs" element={<ProductCare />} />
        </Route>

        {/* MEN's ROUTE */}

        <Route path="/men/*" element={<MensShop />}>
          <Route index element={<MainShop />} />
          <Route path=":mId/*" element={<MenProduct />} />
        </Route>

        {/* WOMEN's ROUTE */}
        <Route path="/women/*" element={<WomenShop />}>
          <Route index element={<WomenMainShop />} />
          <Route path=":wId/*" element={<WomenProduct />} />
        </Route>

        {/* ERRORS ROUTE */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return { router };
};

export default useRoutes;
