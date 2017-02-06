import React from 'react'
import FontIcon from 'material-ui/FontIcon'
import Paper from 'material-ui/Paper'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'
import { grey500 } from 'material-ui/styles/colors'

const iconStyles = {
  cursor: 'not-allowed',
}

export const GenreItem = (props) => (
  <div>
    <Paper>
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text={props.genre} />
        </ToolbarGroup>
        <ToolbarGroup>
          <FontIcon className='material-icons' style={iconStyles} color={ grey500 } hoverColor={ grey500 }>
            call_split</FontIcon>
          <FontIcon className='material-icons' style={iconStyles} color={ grey500 } hoverColor={ grey500 }>
            playlist_add</FontIcon>
        </ToolbarGroup>
      </Toolbar>
    </Paper>
  </div>
)

GenreItem.propTypes = {
  genre: React.PropTypes.string,
}

export default GenreItem
