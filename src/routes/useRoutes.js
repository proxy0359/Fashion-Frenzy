import React from 'react';
import { createRoutesFromElements, Route, Navigate } from 'react-router';

const useRoutes = () => {
  const router = createRoutesFromElements(
    <Route to="/" element={null}>
      <Route index element={<Navigate to="/home" />} />
    </Route>
  );
  return <div>index</div>;
};

export default useRoutes;
