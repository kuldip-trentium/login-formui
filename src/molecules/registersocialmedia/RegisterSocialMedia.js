import React from 'react'
import google from '../../../src/assets/images/Google.svg'
import facebook from '../../../src/assets/images/Facebook.svg'
import Button from '../../atoms/button/Button'
import './registersocialmedia.css'

const RegisterResourse = () => {
  return (
    <div className='login-outside-resource'>
      <Button img={google} text='Continue with Google' alt='google-img' loginButtons='login-buttons' formButtons='login-form-btn' />
      <Button img={facebook} text='Continue with Facebook' alt='facebook-img' loginButtons='login-buttons' formButtons='login-form-btn' />
    </div>
  )
}

export default RegisterResourse
