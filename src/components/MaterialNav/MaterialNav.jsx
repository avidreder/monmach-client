import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'
import { List, ListItem } from 'material-ui/List'
import Drawer from 'material-ui/Drawer'
import Avatar from 'material-ui/Avatar'
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'
import GridLogo from './assets/GridLogo.png'
import HawkLogo from './assets/HawkLogo.png'
import * as actionCreators from 'store/coreActionCreators'

const serverAddress = config ? config.browser_api_path : 'https://app.monmach.com'

class MaterialNavContainer extends React.Component {

  constructor (props) {
    super(props)
    this.state = { open: false }
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => {
    this.setState({ open: false })
  }

  renderWithUser = () => {
    const {
      currentUser,
      handleLogout,
    } = this.props
    return (
      <div>
        <AppBar title={'Monster Machine'}
          onTitleTouchTap={this.handleToggle}
          onLeftIconButtonTouchTap={this.handleToggle} />
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })} >
          <List>
            <ListItem leftAvatar={
                <Avatar src={GridLogo}
                  size={40} onTouchTap={this.handleToggle} />
              }
              rightIcon={
                <IconButton href={`${serverAddress}/logout`} onClick={ () => handleLogout() }>
                  <FontIcon className='material-icons'>exit_to_app</FontIcon>
                </IconButton>
              }
              primaryText={ currentUser.email }
              secondaryText={ currentUser.spotifyId } />
          </List>
        </Drawer>
      </div>
    )
  }


  renderWithoutUser = () => (
    <div>
      <AppBar title={'Monster Machine'} showMenuIconButton={false} />
    </div>
  )

  render = () => {
    const {
      currentUser
    } = this.props
    return currentUser.loggedIn ? this.renderWithUser() : this.renderWithoutUser()
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.core.get('currentUser').toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogout: () => {
      dispatch(actionCreators.removeUser())
    },
  }
}

const MaterialNav = connect(mapStateToProps, mapDispatchToProps)(MaterialNavContainer)

export default MaterialNav
