import React from 'react'
import './text.css'
const Text = (props) => {
  const isHeading = props.heading
  return (
    <div className='text'>
      <div className={isHeading === true ? 'form-heading' : 'normal-text'}>
        <span>{props.text}</span>
      </div>
    </div>
  )
}

export default Text
