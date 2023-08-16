import React from 'react'
import './button.css'
const Button = (props) => {
  return (
    <div className='login-google-facebook'>
      <button className={props.isFacebook === true ? 'login-facebook-btn' : 'login-google-btn'}>
        <img src={props.img} alt={props.alt} />
        <span>{props.text}</span>
      </button>
    </div>
  )
}

export default Button
