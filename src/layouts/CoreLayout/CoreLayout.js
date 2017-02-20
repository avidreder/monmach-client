import React from 'react'
import NavMenu from '../../components/NavMenu'
import MaterialNav from '../../components/MaterialNav'
import Errors from '../../components/Errors'
import GenreForm from '../../components/GenreForm'
import PopulateQueueDialog from '../../components/PopulateQueueDialog'
import Loading from '../../components/Loading'
import Footer from '../../components/Footer'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className='text-center'>
    <MaterialNav />
    <div className='core-layout__viewport'>
      {children}
    </div>
    <Footer />
    <Errors />
    <Loading />
    <GenreForm />
    <PopulateQueueDialog />
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
