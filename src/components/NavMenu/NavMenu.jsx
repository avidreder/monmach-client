import React from 'react'
import { Link } from 'react-router'
import GridLogo from './assets/GridLogo.png'

export const NavMenu = () => (
  <div className='navbar navbar-default' id='home-navbar'>
    <div className='container'>
      <div className='navbar-header'>
        <img style={{ cursor: 'pointer' }} alt='Brand' src={GridLogo} height='50' />
        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
          <span className='icon-bar' />
        </button>
        <Link style={{ cursor: 'pointer' }} to='/' className='navbar-brand'>Monster Machine</Link>
      </div>
      <div className='collapse navbar-collapse'>
        <ul className='nav navbar-nav'>
          <li style={{ cursor: 'pointer' }} className='navbar-link'><Link to='/'>Home</Link></li>
          <li style={{ cursor: 'pointer' }} className='navbar-link'><Link to='/components'>Components</Link></li>
          <li style={{ cursor: 'pointer' }} className='navbar-link'><Link to='/genre'>Genre</Link></li>
          <li style={{ cursor: 'pointer' }} className='navbar-link'><Link to='/playlists'>Playlists</Link></li>
        </ul>
      </div>
    </div>
  </div>
)

export default NavMenu
