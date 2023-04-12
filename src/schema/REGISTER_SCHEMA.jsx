import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  firstName: yup.string().trim().required('First name required'),
  lastName: yup.string().trim().required('Last name require'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email invalid'),
  password: yup
    .string()
    .trim('Invalid password')
    .min(7, 'Please enter 7-20 digits')
    .max(20, 'Please enter 7-20 digits')
    .required('Invalid password'),

  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password'), null], 'Passwords does not match'),
});
