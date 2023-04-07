import React from 'react';

const Login = () => {
  return (
    <div className="grid grid-cols-12 pt-2 pl-8 max-lg:pl-4">
      {/* ALREADY REGISTERED */}
      <div className="col-span-6">
        <h1 className="h1 ">Already Registered?</h1>
      </div>
      {/* LINE GAP */}
      <div className="col-span-1">
        <hr className="w-px inline-block bg-black h-full" />
      </div>

      {/* NO ACCOUNT YET */}
      <div className="col-span-5">
        <h1 className="h1 mb-20">No Account Yet?</h1>
        <button className="button bg-[#e7ddbb] text-black ">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Login;
