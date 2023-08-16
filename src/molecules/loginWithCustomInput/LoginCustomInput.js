import React from 'react'
import Input from '../../atoms/inputs/Input'
import './logincustominput.css'
import Button from '../../atoms/buttons/Button'

const LoginCustomInput = () => {
  return (
    <>
      <div className='custom-inputs'>
        <Input type='text' placeholder='Name' />
        <Input type='email' placeholder='Email' />
        <Button text='Continue'></Button>

      </div>

    </>
  )
}

export default LoginCustomInput
