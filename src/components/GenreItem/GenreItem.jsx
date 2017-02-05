import React from 'react'
import FontIcon from 'material-ui/FontIcon'
import Paper from 'material-ui/Paper'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'

export const GenreItem = (props) => (
  <div>
    <Paper>
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text={props.genre} />
        </ToolbarGroup>
        <ToolbarGroup>
          <FontIcon className='material-icons'
            onClick={() => {} }>
            call_split</FontIcon>
          <FontIcon className='material-icons'
            onClick={() => {} }>
            playlist_add</FontIcon>
        </ToolbarGroup>
      </Toolbar>
    </Paper>
  </div>
)

GenreItem.propTypes = {
  genre: React.PropTypes.object,
}

export default GenreItem
