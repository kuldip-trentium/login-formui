import React from 'react'
import Input from '../../atoms/inputs/Input'
import Continue from '../../atoms/continueButton/Continue'
import Policy from '../../atoms/policy/Policy'
import LoginNavigate from '../../atoms/alreadySubscribe/LoginNavigate'
import './logincustominput.css'

const LoginCustomInput = () => {
  return (
    <>
      <div className='custom-inputs'>
        <Input type='text' placeholder='Name' />
        <Input type='email' placeholder='Email' />
        <Continue />

      </div>

    </>
  )
}

export default LoginCustomInput
