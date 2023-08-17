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
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
          id={props.name}
          className='formik-input'
          style={{color: 'white'}}
        />
      </div>
      <ErrorMessage name={props.name} component='div' className='error-message' />
    </>
  )
}

export default Input
