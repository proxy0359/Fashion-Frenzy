import React from 'react';
import { RouterProvider } from 'react-router';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import useRoutes from './routes/useRoutes';
import './App.css';

function App() {
  const { router } = useRoutes();
  return <RouterProvider router={router} />;
}

export default App;
