import React from 'react';
import { createRoutesFromElements, Route, Navigate } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout';
import LandingPage from '../pages/LandingPage';

import ImpactPage from '../pages/ImpactPage';

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
        <Route path="/home" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* IMPACT */}
        <Route path="impact" element={<ImpactPage />} />

        {/* SUPPORTS ROUTES */}
        <Route path="/support/*" element={<SupportPage />}>
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
