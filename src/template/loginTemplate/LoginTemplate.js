import React from 'react'
import mask from '../../../src/assets/images/Mask.svg'
import LoginPageOrganic from '../../organics/loginForm/LoginPageOrganic'
import './logintemplate.css'

const LoginTemplate = () => {
  return (
    <div className='screen'>
      <div className='login'>
        <img src={mask} alt='background-shadow-img' className='background-shadow-img' />
        <LoginPageOrganic />
      </div>
    </div>
  )
}

export default LoginTemplate
