import React from 'react'
import user from '../../assets/images/User.svg'
import './input.css'

const Input = (props) => {
  return (
    <div className='name-email-input'>
      <img src={user} alt='name-logo' />
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  )
}

export default Input
