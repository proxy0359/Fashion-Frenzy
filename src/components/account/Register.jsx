import React from 'react';
import RegisterForm from './RegisterForm';

const Register = () => {
  return (
    <div className="w-full h-full pt-2 pl-8 max-lg:pl-4">
      <h1 className="max-lg:text-4xl mb-8">Create an Account</h1>
      <div className="grid grid-cols-12 ">
        <div className="col-span-6 max-lg:col-span-12 ml-2">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
