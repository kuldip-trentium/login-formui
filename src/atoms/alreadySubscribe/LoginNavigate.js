import React from 'react'
import './loginnavigae.css'

const LoginNavigate = (props) => {
  return (
    <div className='already-subscribe-login'>
      <a href='#/login' className='already-subscriber'>{props.text}<span>{props.linkText} </span></a>
    </div>
  )
}

export default LoginNavigate
