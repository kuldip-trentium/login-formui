import React from 'react'
import './button.css'

const Button = (props) => {
  let loginButton = props.loginButton

  return (
    <div className={loginButton === true ? 'login-buttons' : 'btn-with-text'}>
      <button className={loginButton === true ? 'login-form-btn' : 'regular-btn'} type={loginButton ? 'button' : 'submit'}
      >
        {props.img && <img src={props.img} alt={props.alt} />}
        <span>{props.text}</span>
      </button>
    </div>
  )
}

export default Button
