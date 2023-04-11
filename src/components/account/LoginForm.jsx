import React from 'react';
import Input from '../UI/form/Input';

import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../schema/LOGIN_SCHEMA';
const LoginForm = () => {
  const methods = useForm({ resolver: yupResolver(loginSchema) });

  const error = methods.formState.errors;

  const signInSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(signInSubmitHandler)}
        className="block"
      >
        {error.email ? <p>{error.email.message}</p> : null}

        <Input
          type="text"
          label="Email"
          id="email"
          name="email"
          placeholder="Email"
        />
        {}
        <Input
          type="text"
          label="Password"
          id="password"
          name="password"
          placeholder="Password"
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
