import React from 'react'
import NavMenu from '../../components/NavMenu'
import MaterialNav from '../../components/MaterialNav'
import Footer from '../../components/Footer'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className='text-center'>
    <NavMenu />
    <MaterialNav />
    <div className='core-layout__viewport'>
      {children}
    </div>
    <Footer />
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
