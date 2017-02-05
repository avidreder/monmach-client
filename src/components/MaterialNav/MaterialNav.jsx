import React from 'react'
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar'
import { List, ListItem } from 'material-ui/List'
import Drawer from 'material-ui/Drawer'
import Avatar from 'material-ui/Avatar'
import GridLogo from './assets/GridLogo.png'
import HawkLogo from './assets/HawkLogo.png'

export default class MaterialNav extends React.Component {

  constructor (props) {
    super(props)
    this.state = { open: false }
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => {
    this.setState({ open: false })
  }

  render = () => (
    <div>
      <AppBar title={'Monster Machinesss'}
        onTitleTouchTap={this.handleToggle}
        onLeftIconButtonTouchTap={this.handleToggle}
        iconElementRight={
          <div>
            <Avatar src={GridLogo}
              size={40}
              onTouchTap={this.handleToggle} />
            <Avatar src={HawkLogo}
              size={40}
              onTouchTap={this.handleToggle} />
            <Avatar size={40} onTouchTap={this.handleToggle}>M</Avatar>
          </div>} />
      <Drawer
        docked={false}
        width={200}
        open={this.state.open}
        onRequestChange={(open) => this.setState({ open })} >
        <List>
          <ListItem leftAvatar={<Avatar src={GridLogo}
            size={40} onTouchTap={this.handleToggle} />}
            onTouchTap={this.handleClose}>
            <Link to='/'>Monster Machine</Link>
          </ListItem>
          <ListItem onTouchTap={this.handleClose}
            leftAvatar={
              <Avatar src={HawkLogo} size={40}
                onTouchTap={this.handleToggle} />
            }>
            <Link to='/components'>ShowHawk</Link>
          </ListItem>
          <ListItem onTouchTap={this.handleClose}
            leftAvatar={
              <Avatar size={40}
                onTouchTap={this.handleToggle}>M</Avatar>
            }>
            <Link to='/'>MonsterMachine</Link>
          </ListItem>
        </List>
      </Drawer>
    </div>
  )
}
