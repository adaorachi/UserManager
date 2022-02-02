import * as yup from 'yup';

export const validationSchema = yup.object({
  name: yup
    .string('Enter your name')
    .min(3, 'Name should be of minimum 3 characters length')
    .required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  username: yup
    .string('Enter your username')
    .min(2, 'Username should be of minimum 2 characters length'),
  city: yup
    .string('Enter your city')
    .min(2, 'City should be of minimum 2 characters length'),
});
