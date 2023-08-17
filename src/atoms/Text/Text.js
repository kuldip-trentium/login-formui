import React from 'react'
import './text.css'
const Text = (props) => {
  return (
    <span className={props.classAddOn || 'normal-text'}>{props.text}</span>
  )
}

export default Text
