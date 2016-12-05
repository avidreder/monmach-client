import React from 'react'
import classnames from 'classnames'
import GithubLogo from './assets/GithubLogo.png'
import LinkedInLogo from './assets/LinkedInLogo.png'

export const Footer = () => (
  <div className={classnames('navbar', 'navbar-bottom', 'row')} id='home-navbar'>
    <div className='container'>
      <div className='navbar-left'><h3>&#169; 2016 Andrew Reder</h3></div>
      <div className='navbar-right'>
        <a target='_blank'
          href='https://github.com/avidreder'>
          <img src={GithubLogo} width='40' />
        </a>
        <a target='_blank'
          href='https://www.linkedin.com/pub/andrew-reder/62/59b/b81/en'>
          <img src={LinkedInLogo} width='40' />
        </a>
      </div>
    </div>
  </div>
)

export default Footer
