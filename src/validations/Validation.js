import {object, string} from 'yup';

export const validation = {
  emailValidationSchema: object().shape({
    email: string().email('Invalid email').required('Email is required'),
  }),
  nameValidationSchema: object().shape({
    name: string().required('Name is required'),
  }),
}