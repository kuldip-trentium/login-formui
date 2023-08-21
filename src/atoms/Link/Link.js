import React from 'react'
import './link.css'
const Link = (props) => {
  return (
    <a href={props.navigateTo || '#'} className={props.linkStyle || `link ${props.classAddOn}`} >{props.text}</a>
  )
}

export default Link
