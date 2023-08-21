import React from 'react'
import Text from '../../atoms/Text/Text'
import Link from '../../atoms/Link/Link'
import './policy-login.css'

const PolicyAndLogin = () => {
  return (
    <>
      <div className='terms-agree-documents'>
        <Text text='By using the app, I agree to The Sport' />
        <Link text='Terms of Services & Privacy Policy' navigateTo="/policy" />
      </div>
      <div className='already-subscribe-login'>
        <span className='already-subscribe'>Already a Subscriber?<Link text='Log In' navigateTo='/login' linkStyle='log-in'> </Link></span>
      </div>
    </>
  )
}

export default PolicyAndLogin
