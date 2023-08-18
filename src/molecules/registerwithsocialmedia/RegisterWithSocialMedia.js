import React from 'react'
import google from '../../../src/assets/images/Google.svg'
import facebook from '../../../src/assets/images/Facebook.svg'
import Button from '../../atoms/button/Button'
import './registerwithsocialmedia.css'

const RegisterWithResourse = () => {
  return (
    <div className='login-outside-resource'>
      <Button img={google} text='Continue with Google' btnWithImg='btn-img' formButtons='login-form-btn' />
      <Button img={facebook} text='Continue with Facebook' btnWithImg='btn-img' formButtons='login-form-btn' />
    </div>
  )
}

export default RegisterWithResourse
