import React from 'react'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

export const TrackPlaylists = () => (
  <div>
    <Card>
      <CardHeader title='Track Playlists' />
      <CardText>
        <DropDownMenu value={1} >
          <MenuItem value={1} primaryText='Playlist 1' />
          <MenuItem value={2} primaryText='Playlist 2' />
        </DropDownMenu>
      </CardText>
    </Card>
  </div>
)

export default TrackPlaylists
