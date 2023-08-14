import React from 'react'
import './button.css'
const Button = (props) => {
  return (
    <div className='login-google-facebook'>
      <button className='login-google-facebook-button'>
        <img src={props.img} alt={props.alt} />
        <span>{props.text}</span>
      </button>
    </div>
  )
}

export default Button
