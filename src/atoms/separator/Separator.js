import React from 'react'
import './separator.css'

const Separator = (props) => {
  return (
    <div className='separator'>
      <p className={props.classAddOn || 'or-text'}>{props.text}</p>
    </div>
  )
}

export default Separator
