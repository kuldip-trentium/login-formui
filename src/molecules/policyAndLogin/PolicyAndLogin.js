import React from 'react'
import Navigator from '../../atoms/navigator/Navigator'
import Text from '../../atoms/Text/Text'
import Link from '../../atoms/Link/Link'
import './policy-login.css'

const PolicyAndLogin = () => {
  return (
    <>
      <div className='terms-agree-documents'>
        <Text text='By using the app, I agree to The Sport' heading={false} />
        <Link text='Terms of Services & Privacy Policy' link="#" />
      </div>
      <Navigator text='Already a Subscriber?' linkText='Log In' link='#' />
    </>
  )
}

export default PolicyAndLogin
