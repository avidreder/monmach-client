import React from 'react'
import classnames from 'classnames'
import GithubLogo from './assets/GithubLogo.png'
import LinkedInLogo from './assets/LinkedInLogo.png'

export const Footer = () => (
  <div className={classnames('navbar', 'navbar-bottom', 'row')} id='home-navbar'>
    <div className='container'>
      <div className='navbar-left'><h3>&#169; 2017 Andrew Reder</h3></div>
      <div className='navbar-right'>
        <a target='_blank'
          href='https://github.com/avidreder'>
          <img src={GithubLogo} width='40' />
        </a>
      </div>
    </div>
  </div>
)

export default Footer
