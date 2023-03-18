import React from 'react';
import { RouterProvider } from 'react-router';

import useRoutes from './routes/useRoutes';
import './App.css';

function App() {
  const { router } = useRoutes();
  return <RouterProvider router={router} />;
}

export default App;
