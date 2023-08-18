import React from 'react'
import RegisterSocialMedia from '../../molecules/registersocialmedia/RegisterSocialMedia'
import Seperator from '../../atoms/seperator/Seperator'
import Form from '../../molecules/form/Form'
import PolicyAndLogin from '../../molecules/policyAndLogin/PolicyAndLogin'
import Text from '../../atoms/Text/Text'
import BackGround from '../../atoms/background/BackGround'
import './register.css'
import profile from '../../../src/assets/images/Profile.svg'
const Register = () => {
  return (
    <>
      <BackGround isLogo={true} />
      <div className='background-light' />
      <img src={profile} alt='profile-img' className='profile-img' />
      <div className='login-form-fields'>
        <Text text='Create an Account' classAddOn='form-heading' />
        <RegisterSocialMedia />
        <Seperator text='Or' />
        <Form />
        <PolicyAndLogin />
      </div>
    </>
  )
}

export default Register
