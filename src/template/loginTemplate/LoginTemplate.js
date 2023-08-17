import React from 'react'
import LoginPageOrganic from '../../organics/loginForm/LoginPageOrganic'
import './logintemplate.css'
import Shadow from '../../atoms/shadow/Shadow'

const LoginTemplate = () => {
  return (
    <div className='screen'>
      <div className='login'>
        {/* <div className='background-shadow-img'>
        </div> */}
        <Shadow />
        <LoginPageOrganic />
      </div>
    </div>
  )
}

export default LoginTemplate
