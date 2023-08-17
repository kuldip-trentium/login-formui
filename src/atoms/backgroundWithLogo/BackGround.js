import React from 'react'
import profile from '../../../src/assets/images/Profile.svg'
import './background.css'

const BackGround = (props) => {
  let isLogo = props.isLogo
  return (
    <div className='login-form'>
      {isLogo && <img src={profile} alt='profile-img' className='profile-img' />}
    </div>
  )
}

export default BackGround
