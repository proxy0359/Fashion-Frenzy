import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email required'),
  password: yup.string().min(7).max(20).required('Please Provide a password'),
});
