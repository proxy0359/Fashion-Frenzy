import React, { useEffect } from 'react';

import Input from '../UI/form/Input';

import { FormProvider, useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../schema/LOGIN_SCHEMA';

import FormError from '../UI/error/FormError';

const LoginForm = () => {
  const methods = useForm({ resolver: yupResolver(loginSchema) });

  const { formState, reset } = methods;

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

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
        <h1 className="h1 mb-10 ">Already Registered?</h1>

        <FormError errorTrue={error.email} />
        <Input
          type="text"
          label="Email"
          id="email"
          name="email"
          placeholder="Email"
        />

        <FormError errorTrue={error.password} />

        <Input
          type="text"
          label="Password"
          id="password"
          name="password"
          placeholder="Password"
        />

        <NavLink
          to="/account/login/recover"
          className="link  mb-10 block w-fit"
        >
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
