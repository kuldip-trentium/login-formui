import React from 'react'
import Input from '../../atoms/input/Input'
import './form.css'
import Button from '../../atoms/button/Button'
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import user from '../../assets/images/User.svg'
const FormFields = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className='custom-inputs'>
      <Formik
        initialValues={{
          name: '',
          email: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('Name is required'),
          email: Yup.string().email('Invalid email address').required('Email is required'),
        })}
        onSubmit={handleSubmit}
      >
        <Form>
          <Input type='text' placeholder='Name' name='name' image={user} />
          <Input type='email' placeholder='Email' name='email' image={user} />
          <Button type='submit' text='Continue'>Continue</Button>
        </Form>
      </Formik>

    </div>

  )
}

export default FormFields
