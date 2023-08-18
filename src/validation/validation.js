import * as Yup from 'yup'

export const registrationValidation =
  Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
  })

