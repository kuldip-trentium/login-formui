import React from 'react'
import google from '../../../src/assets/images/Google.svg'
import facebook from '../../../src/assets/images/Facebook.svg'
import Button from '../../atoms/loginFormButtons/Button'
import './loginresourse.css'

const LoginResourse = () => {
  return (
    <div className='login-outside-resource'>
      <Button img={google} text='Continue with Google' alt='google-img' />
      <Button img={facebook} text='Continue with Facebook' alt='facebook-img' />
    </div>
  )
}

export default LoginResourse
