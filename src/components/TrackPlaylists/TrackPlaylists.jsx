import React from 'react'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import DropDownMenu from 'material-ui/DropDownMenu'
import Checkbox from 'material-ui/Checkbox'
import MenuItem from 'material-ui/MenuItem'
import * as _ from 'lodash'

export const TrackPlaylists = (props) => (
  <div>
    <Card>
      <CardHeader title='Track Playlists' />
      <CardText>
        {props.playlists.map(playlist =>
          <Checkbox
            key={ playlist.id }
            label={ playlist.name }
            checked={ _.includes(props.track.Playlists, playlist.id)}
          />
        )}
      </CardText>
    </Card>
  </div>
)

TrackPlaylists.propTypes = {
  track: React.PropTypes.object,
  playlists: React.PropTypes.array,
}

export default TrackPlaylists
