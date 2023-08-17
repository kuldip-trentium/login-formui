import React from 'react'
import './link.css'
const Link = (props) => {
  return (
    <a href={props.link || '#'} className={props.classAddOn || 'link'} >{props.text}</a>
  )
}

export default Link
