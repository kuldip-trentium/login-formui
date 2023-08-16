import React from 'react'
import './link.css'
const Link = (props) => {
  return (
    <div className='link'>
      <a href='#/'>{props.text}</a>
    </div>
  )
}

export default Link
