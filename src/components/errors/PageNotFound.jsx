import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div>
      404 Page not Found Please Click{' '}
      <NavLink to="/" className="link">
        Here
      </NavLink>{' '}
      to go back
    </div>
  );
};

export default PageNotFound;
