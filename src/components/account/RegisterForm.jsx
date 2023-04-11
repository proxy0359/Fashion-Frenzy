import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Input from '../UI/form/Input';
import { useNavigate } from 'react-router';

const RegisterForm = () => {
  const navigate = useNavigate();
  const methods = useForm();

  const cancelRegister = () => {
    navigate(-1);
  };

  const registerSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(registerSubmitHandler)}>
        <Input type="text" label="First Name" name="firstName" id="firstName" />
        <Input type="text" label="Last Name" name="lastName" id="lastName" />
        <Input type="text" label="Email" name="email" id="email" />
        <Input type="text" label="Password" name="password" id="password" />
        <Input
          type="text"
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
