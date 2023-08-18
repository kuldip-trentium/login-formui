import React from 'react'
import google from '../../../src/assets/images/Google.svg'
import facebook from '../../../src/assets/images/Facebook.svg'
import Button from '../../atoms/button/Button'
import './registersocialmedia.css'

const RegisterResourse = () => {
  return (
    <div className='login-outside-resource'>
      <Button img={google} text='Continue with Google' alt='google-img' classAddOn1='login-buttons' classAddOn2='login-form-btn' />
      <Button img={facebook} text='Continue with Facebook' alt='facebook-img' classAddOn1='login-buttons' classAddOn2='login-form-btn' />
    </div>
  )
}

export default RegisterResourse
