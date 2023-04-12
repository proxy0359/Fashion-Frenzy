import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = ({ children }) => {
  return (
    <div className="grid grid-cols-12 pt-2 pl-8 max-lg:pl-4">
      {/* ALREADY REGISTERED */}
      <div className="col-span-6 max-lg:col-span-12">{children}</div>
      {/* LINE GAP */}
      <div className="col-span-1 max-lg:col-span-11 max-lg:my-10">
        <hr className="w-px max-lg:w-full  max-lg:h-[2px] inline-block bg-black h-full " />
      </div>

      {/* NO ACCOUNT YET */}
      <div className="col-span-5 max-lg:col-span-12">
        <h1 className="h1 mb-20">No Account Yet?</h1>
        <NavLink
          to="/account/register"
          className="button bg-[#e7ddbb] text-black w-fit "
        >
          Create Account
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
