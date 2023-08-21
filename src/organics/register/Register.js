import React from 'react'
import RegisterWithSocialMedia from '../../molecules/registerwithsocialmedia/RegisterWithSocialMedia'
import Separator from '../../atoms/separator/Separator'
import RegistrationForm from '../../molecules/registrationform/RegistrationForm'
import PolicyAndLogin from '../../molecules/policyAndLogin/PolicyAndLogin'
import Text from '../../atoms/Text/Text'
import BackGround from '../../atoms/background/BackGround'
import './register.css'
import profile from '../../../src/assets/images/Profile.svg'
const Register = () => {
  return (
    <>
      <BackGround />
      <div className='background-light' />
      <img src={profile} alt='profile-img' className='profile-img' />
      <div className='login-form-fields'>
        <Text text='Create an Account' headingStyle='form-heading' />
        <RegisterWithSocialMedia />
        <Separator text='Or' />
        <RegistrationForm />
        <PolicyAndLogin />
      </div>
    </>
  )
}

export default Register
