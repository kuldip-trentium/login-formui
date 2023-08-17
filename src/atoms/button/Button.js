import React from 'react'
import './button.css'

const Button = (props) => {
  return (
    <div className={props.classAddOn1 || 'btn-with-text'}>
      <button className={props.classAddOn2 || 'regular-btn'}
        type={props.type || ''}>
        {props.img && <img src={props.img} alt={props.alt} />}
        <span>{props.text}</span>
      </button>
    </div>
  )
}

export default Button
