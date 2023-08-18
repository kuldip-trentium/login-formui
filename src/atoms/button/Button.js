import React from 'react'
import './button.css'

const Button = (props) => {
  return (
    <div className={props.loginButtons || `btn-with-text ${props.classAddOn || ''}`}>
      <button className={props.formButtons || `regular-btn ${props.classAddOn || ''}`}
        type={props.type || ''}>
        {props.img && <img src={props.img || ''} alt={props.img || ''} />}
        <span>{props.text || ''}</span>
      </button>
    </div>
  )
}

export default Button
