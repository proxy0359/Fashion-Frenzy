import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Input from '../UI/form/Input';
import { useNavigate } from 'react-router';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../schema/REGISTER_SCHEMA';
import FormError from '../UI/error/FormError';

const RegisterForm = () => {
  const navigate = useNavigate();
  const methods = useForm({ resolver: yupResolver(registerSchema) });
  const error = methods.formState.errors;
  const formState = methods.formState;
  const { reset } = methods;
  console.log(error.firstName);

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
      window.scrollTo(0, 0);
    }
  }, [formState, reset]);

  const cancelRegister = () => {
    navigate(-1);
  };

  const registerSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(registerSubmitHandler)}>
        {/*FIRST NAME ERROR MESSAGE */}
        <FormError errorTrue={error.firstName} />
        <Input type="text" label="First Name" name="firstName" id="firstName" />

        {/* LAST NAME ERROR MESSAGE */}
        <FormError errorTrue={error.lastName} />
        <Input type="text" label="Last Name" name="lastName" id="lastName" />

        {/* EMAIL ERROR MESSAGE */}
        <FormError errorTrue={error.email} />
        <Input type="text" label="Email" name="email" id="email" />

        {/* PASSWORD ERROR MESSAGE */}
        <FormError errorTrue={error.password} />
        <Input type="password" label="Password" name="password" id="password" />

        {/* CONFIRM PASSWORD ERROR */}
        <FormError errorTrue={error.confirmPassword} />

        <Input
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          id="confirmPassword"
        />

        <button type="submit" className="button bg-[#e7ddbb] mb-10">
          Create account
        </button>
        <button type="button" onClick={cancelRegister}>
          Cancel
        </button>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
