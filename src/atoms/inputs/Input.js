import React from 'react'
import user from '../../assets/images/User.svg'
import './input.css'
import {useFormik} from 'formik';
import * as Yup from 'yup';

const Input = (props) => {
  const formik = useFormik({
    initialValues: {
      [props.name]: '',
    },
    validationSchema: Yup.object({
      [props.name]: Yup.string().required(`${props.placeholder} is required`),
    }),
    onSubmit: (values) => {
      // Handle form submission here
      console.log('Form values:', values);
    },
  });
  return (
    <div className='name-email-input'>
      <img src={user} alt='name-logo' />
      {/* <input type={props.type} placeholder={props.placeholder} /> */}
      <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[props.name]}
      />
    </div>
  )
}

export default Input
