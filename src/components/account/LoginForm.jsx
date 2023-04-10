import React from 'react';
import Input from '../UI/form/Input';

import { FormProvider, useForm, useFormContext } from 'react-hook-form';

import { NavLink } from 'react-router-dom';

const LoginForm = () => {
  const methods = useForm();
  const signInSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(signInSubmitHandler)}
        className="block"
      >
        <Input
          type="email"
          label="Email"
          id="email"
          name="email"
          placeholder="Email"
        />

        <NavLink to="/account/recover" className="link  mb-10 block w-fit">
          Forgot your password
        </NavLink>

        <button type="submit" className="button bg-[#e7ddbb]  ">
          Sign in
        </button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
