import React from 'react'
import './seperator.css'

const Seperator = (props) => {
  return (
    <div className='seperator'>
      <p className={props.classAddOn || 'or-text'}>{props.text}</p>
    </div>
  )
}

export default Seperator
