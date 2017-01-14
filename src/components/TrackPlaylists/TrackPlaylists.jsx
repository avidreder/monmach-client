import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardHeader, CardText } from 'material-ui/Card'
import Popover from 'material-ui/Popover';
import Checkbox from 'material-ui/Checkbox'
import MenuItem from 'material-ui/MenuItem'
import * as _ from 'lodash'

export default class TrackPlaylists extends Component {
  constructor(props){
    super(props)
    this.state = { open: false }
  }
  static propTypes = {
    track: React.PropTypes.object,
    playlists: React.PropTypes.array,
  }
  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };
  render() {
    const { open } = this.state;
    const { track, playlists } = this.props;
    return (
      <div>
        <Card>
          <CardHeader title='Track Playlists' />
          <CardText>
            { playlists.map(playlist =>
              _.includes(track.Playlists, playlist.id) && <Checkbox
                key={ playlist.id }
                label={ playlist.name }
                checked
              />
            ) }
            <RaisedButton
              onTouchTap={this.handleTouchTap}
              label="More..."
            />
            <Popover open={ open }
              anchorEl={this.state.anchorEl}
              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              onRequestClose={this.handleRequestClose}>
              { _.reject(playlists, (o) => (_.includes(track.Playlists, o.id))).map(playlist =>
                <Checkbox
                  key={ playlist.id }
                  label={ playlist.name }
                  checked={ false }
                />
              ) }
            </Popover>

          </CardText>
        </Card>
      </div>
    );
  }
}
