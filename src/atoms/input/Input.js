import React from 'react'
import user from '../../assets/images/User.svg'
import './input.css'
// import {useFormik} from 'formik';
// import * as Yup from 'yup';
import {Field, ErrorMessage} from 'formik';

const Input = (props) => {
  return (
    <>
      <div className='name-email-input'>
        <img src={user} alt='user img' />
        <Field
          name={props.name}
          id={props.name}
          className='formik-input'
          {...props}
        />
      </div>
      <ErrorMessage name={props.name} component='div' className='error-message' />
    </>
  )
}

export default Input
