import React from 'react'
import './input.css'
import {Field, ErrorMessage} from 'formik';

const Input = (props) => {
  return (
    <>
      <div className='name-email-input'>
        <img src={props.image} alt='user img' />
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
