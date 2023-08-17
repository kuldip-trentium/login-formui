import React from 'react'
import LoginSocialMedia from '../../molecules/LoginSocialMedia/LoginSocialMedia'
import Seperator from '../../atoms/seperator/Seperator'
import Form from '../../molecules/form/Form'
import PolicyAndLogin from '../../molecules/policyAndLogin/PolicyAndLogin'
import Text from '../../atoms/Text/Text'
import BackGround from '../../atoms/backgroundWithLogo/BackGround'
import './loginform.css'
import profile from '../../../src/assets/images/Profile.svg'
const LoginPageOrganic = () => {
  return (
    <>
      <BackGround isLogo={true} />
      <img src={profile} alt='profile-img' className='profile-img' />
      <div className='login-form-fields'>
        <Text text='Create an Account' classAddOn='form-heading' />
        <LoginSocialMedia />
        <Seperator text='Or' />
        <Form />
        <PolicyAndLogin />
      </div>
    </>
  )
}

export default LoginPageOrganic
