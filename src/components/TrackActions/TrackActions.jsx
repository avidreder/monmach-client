import React from 'react'
import Paper from 'material-ui/Paper'
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import FontIcon from 'material-ui/FontIcon'
import { amber500 } from 'material-ui/styles/colors'
import * as _ from 'lodash'

export const TrackActions = (props) => (
  <div>
    <Paper>
      <Toolbar>
        <ToolbarGroup>
          { _.range(1, props.track.Rating + 1).map((value) => {
            return <FontIcon key={ value } className='material-icons' color={ amber500 } onClick={() => props.addRating(value)}>star</FontIcon>
          })}
          { _.range(props.track.Rating + 1, 6).map((value) => {
            return <FontIcon className='material-icons' hoverColor={ amber500 } onClick={() => props.addRating(value)}>star_border</FontIcon>
          })}
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
  addGenre: React.PropTypes.func,
  addRating: React.PropTypes.func,
}

export default TrackActions
