import * as yup from 'yup';

export const ForgotPasswordSchema = yup.object().shape({
  email: yup.string().email('Invalid Email').required('Invalid Email'),
});
