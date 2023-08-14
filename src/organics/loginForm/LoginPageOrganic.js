import React from 'react'
import LoginResourse from '../../molecules/LoginWithResources/LoginResourse'
import Seperator from '../../atoms/seperator/Seperator'
import LoginCustomInput from '../../molecules/loginWithCustomInput/LoginCustomInput'
import profile from '../../../src/assets/images/Profile.svg'
import './loginpage.css'
import PolicyAndLogin from '../../molecules/policyAndLogin/PolicyAndLogin'
const LoginPageOrganic = () => {
  return (
    <>
      <div className='login-form'>
        <img src={profile} alt='profile-img' className='profile-img' />
        <div className='form-heading'>Create an Account</div>

        <LoginResourse />

        <Seperator text='Or' />

        <LoginCustomInput />
        <PolicyAndLogin />
      </div>
    </>
  )
}

export default LoginPageOrganic
