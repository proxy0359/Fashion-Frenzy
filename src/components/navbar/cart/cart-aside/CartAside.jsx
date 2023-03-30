import React from 'react';
import './CartAside.css';

const CartAside = () => {
  return (
    <ul className="flex-col mb-8">
      <li className="mb-4">
        <NavLink
          to="/men"
          className="flex justify-between text-lg"
          onClick={onClick}
        >
          Men <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/women"
          className="flex justify-between text-lg"
          onClick={onClick}
        >
          Women <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
        </NavLink>
      </li>
    </ul>
  );
};

export default CartAside;
