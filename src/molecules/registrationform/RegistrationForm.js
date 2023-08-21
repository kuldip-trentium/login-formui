import React from 'react'
import Input from '../../atoms/input/Input'
import './registrationform.css'
import Button from '../../atoms/button/Button'
import {Formik, Form} from 'formik';
import user from '../../assets/images/User.svg'
import {registrationValidation} from '../../validation/validation';
const RegistartionForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  const initialValue = {
    name: '',
    email: '',
  }
  return (
    <div className='custom-inputs'>
      <Formik
        initialValues={initialValue}
        validationSchema={registrationValidation}
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

export default RegistartionForm
