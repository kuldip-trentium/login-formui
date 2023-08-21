import React from 'react'
import './separator.css'

const Separator = (props) => {
  return (
    <div className='separator'>
      <p className={props.addedClass || `or-text ${props.classAddOn || ''}`}>{props.text}</p>
    </div>
  )
}

export default Separator
