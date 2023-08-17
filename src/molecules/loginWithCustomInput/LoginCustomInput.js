import React from 'react'
import Input from '../../atoms/inputs/Input'
import './logincustominput.css'
import Button from '../../atoms/buttons/Button'
import {Formik, Form} from 'formik';
import * as Yup from 'yup';


const LoginCustomInput = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
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
            <Input type='text' placeholder='Name' name='name' />
            <Input type='email' placeholder='Email' name='email' />
            <Button type='submit' text='Continue'>Continue</Button>
          </Form>
        </Formik>

      </div>

    </>
  )
}

export default LoginCustomInput
