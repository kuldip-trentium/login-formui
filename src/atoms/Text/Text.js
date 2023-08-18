import React from 'react'
import './text.css'
const Text = (props) => {
  return (
    <span className={props.headingStyle || `normal-text ${props.classAddOn}`}>{props.text}</span>
  )
}

export default Text
