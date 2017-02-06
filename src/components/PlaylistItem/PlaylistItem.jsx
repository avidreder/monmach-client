import React from 'react'
import FontIcon from 'material-ui/FontIcon'
import Paper from 'material-ui/Paper'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'

export const PlaylistItem = (props) => (
  <div>
    <Paper>
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text={props.playlist.name} />
        </ToolbarGroup>
        <ToolbarGroup>
          <FontIcon className='material-icons'
            onClick={() => props.tracksFromPlaylist(props.playlist)} >
            playlist_add</FontIcon>
        </ToolbarGroup>
      </Toolbar>
    </Paper>
  </div>
)

PlaylistItem.propTypes = {
  playlist: React.PropTypes.object,
  tracksFromPlaylist: React.PropTypes.func,
}

export default PlaylistItem
