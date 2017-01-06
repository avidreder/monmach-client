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
          <FontIcon className='material-icons'>
            play_circle_outline
          </FontIcon>
          <FontIcon className='material-icons'>
            not_interested</FontIcon>
          <FontIcon className='material-icons'>
            playlist_add</FontIcon>
        </ToolbarGroup>
      </Toolbar>
    </Paper>
  </div>
)

PlaylistItem.propTypes = {
  playlist: React.PropTypes.object,
}

export default PlaylistItem
