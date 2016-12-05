import React from 'react'
import Paper from 'material-ui/Paper'
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import FontIcon from 'material-ui/FontIcon'

export const TrackActions = (props) => (
  <div>
    <Paper>
      <Toolbar>
        <ToolbarGroup>
          <FontIcon className='material-icons'>star_border</FontIcon>
          <FontIcon className='material-icons'>star_border</FontIcon>
          <FontIcon className='material-icons'>star_border</FontIcon>
          <FontIcon className='material-icons'>star_border</FontIcon>
          <FontIcon className='material-icons'>star_border</FontIcon>
        </ToolbarGroup>
        <ToolbarGroup>
          <FloatingActionButton mini>
            <FontIcon className='material-icons'
              onClick={() => props.addGenre(props.track)}>
              playlist_add</FontIcon>
          </FloatingActionButton>
          <FloatingActionButton mini>
            <FontIcon className='material-icons'>not_interested</FontIcon>
          </FloatingActionButton>
          <FloatingActionButton mini>
            <FontIcon className='material-icons'>menu</FontIcon>
          </FloatingActionButton>
        </ToolbarGroup>
      </Toolbar>
    </Paper>
  </div>
)

TrackActions.propTypes = {
  track: React.PropTypes.object,
  addGenre: React.PropTypes.func
}

export default TrackActions
