import React from 'react'
import LoginResourse from '../../molecules/LoginWithResources/LoginResourse'
import Seperator from '../../atoms/seperator/Seperator'
import LoginCustomInput from '../../molecules/loginWithCustomInput/LoginCustomInput'
import './loginpage.css'
import PolicyAndLogin from '../../molecules/policyAndLogin/PolicyAndLogin'
import Text from '../../atoms/Text/Text'
import BackGround from '../../atoms/backgroundWithLogo/BackGround'
const LoginPageOrganic = () => {
  return (
    <>
      <BackGround isLogo={true} />
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
