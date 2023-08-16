import React from 'react'
import LoginResourse from '../../molecules/LoginWithResources/LoginResourse'
import Seperator from '../../atoms/seperator/Seperator'
import LoginCustomInput from '../../molecules/loginWithCustomInput/LoginCustomInput'
import profile from '../../../src/assets/images/Profile.svg'
import './loginpage.css'
import PolicyAndLogin from '../../molecules/policyAndLogin/PolicyAndLogin'
import Text from '../../atoms/Text/Text'
const LoginPageOrganic = () => {
  return (
    <>
      <div className='login-form'>
        <img src={profile} alt='profile-img' className='profile-img' />

      </div>
      <div className='login-form-fields'>
        <Text text='Create an Account' heading={true} />

        <LoginResourse />

        <Seperator text='Or' />

        <LoginCustomInput />
        <PolicyAndLogin />
      </div>
    </>
  )
}

export default LoginPageOrganic
