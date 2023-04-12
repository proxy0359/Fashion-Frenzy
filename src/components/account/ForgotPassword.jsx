import React, { useEffect } from 'react';
import Input from '../UI/form/Input';

import { FormProvider, useForm } from 'react-hook-form';

import { useNavigate } from 'react-router';
import { yupResolver } from '@hookform/resolvers/yup';

import FormError from '../UI/error/FormError';

import { ForgotPasswordSchema } from '../../schema/FORGOT_PASSWORD_SCHEMA';

import Alert from '../UI/alert/Alert';

const ForgotPassword = () => {
  const methods = useForm({ resolver: yupResolver(ForgotPasswordSchema) });
  const { handleSubmit, formState, reset } = methods;

  const error = formState.errors;

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  const navigate = useNavigate();

  const cancelHandler = () => {
    navigate(-1);
  };

  const recoverEmailHandler = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1 className="mb-4"> Reset your password</h1>
      <p className="mb-4">We will send you an email to reset your password </p>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(recoverEmailHandler)}>
          <Alert
            isTrue={formState.isSubmitSuccessful}
            message={'Please check your email'}
          />

          <FormError errorTrue={error.email} />
          <Input
            type="text"
            label="Email"
            placeholder="Email"
            id="email"
            name="email"
          />
          <button type="submit" className="button bg-[#e7ddbb] mb-8">
            Submit
          </button>
          <button onClick={cancelHandler}>Cancel</button>
        </form>
      </FormProvider>
    </>
  );
};

export default ForgotPassword;
