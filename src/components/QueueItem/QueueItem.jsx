import React from 'react'
import FontIcon from 'material-ui/FontIcon'
import Paper from 'material-ui/Paper'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'

export const QueueItem = (props) => (
  <div>
    <Paper>
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text={props.track.Name} />
        </ToolbarGroup>
        <ToolbarGroup>
          <FontIcon className='material-icons'
            onClick={() => props.setTrack(props.track)}>
            play_circle_outline
          </FontIcon>
          <FontIcon className='material-icons'
            onClick={() => props.removeFromQueue(props.track)}>
            not_interested</FontIcon>
          <FontIcon className='material-icons'
            onClick={() => props.addGenre(props.track)}>
            playlist_add</FontIcon>
        </ToolbarGroup>
      </Toolbar>
    </Paper>
  </div>
)

QueueItem.propTypes = {
  track: React.PropTypes.object,
  setTrack: React.PropTypes.func,
  removeFromQueue: React.PropTypes.func,
  addGenre: React.PropTypes.func,
}

export default QueueItem
