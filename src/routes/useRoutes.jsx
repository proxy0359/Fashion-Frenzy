import React, { useCallback, useMemo } from 'react';
import { createRoutesFromElements, Route, Navigate } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout';
import LandingPage from '../pages/LandingPage';
import PageNotFound from '../components/errors/PageNotFound';

const useRoutes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return { router };
};

export default useRoutes;
