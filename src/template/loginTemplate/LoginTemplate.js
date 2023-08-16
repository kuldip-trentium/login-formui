import React from 'react'
import LoginPageOrganic from '../../organics/loginForm/LoginPageOrganic'
import './logintemplate.css'

const LoginTemplate = () => {
  return (
    <div className='screen'>
      <div className='login'>
        {/* <img src={mask} alt='background-shadow-img' className='background-shadow-img' /> */}
        <div className='background-shadow-img'>

        </div>
        <LoginPageOrganic />
      </div>
    </div>
  )
}

export default LoginTemplate
