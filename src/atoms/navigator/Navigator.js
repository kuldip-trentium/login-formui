import React from 'react'
import './navigator.css'
import Link from '../Link/Link'

const Navigator = (props) => {
  return (
    <div className='already-subscribe-login'>
      <span className='already-subscribe'>{props.text}<Link text='Log In' link={props.link} classAddOn='log-in'>{props.linkText} </Link></span>
    </div>
  )
}

export default Navigator
