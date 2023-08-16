import React from 'react'
import google from '../../../src/assets/images/Google.svg'
import facebook from '../../../src/assets/images/Facebook.svg'
import Button from '../../atoms/buttons/Button'
import './loginresourse.css'

const LoginResourse = () => {
  return (
    <div className='login-outside-resource'>
      <Button img={google} text='Continue with Google' alt='google-img' loginButton={true} />
      <Button img={facebook} text='Continue with Facebook' alt='facebook-img' loginButton={true} />
    </div>
  )
}

export default LoginResourse
