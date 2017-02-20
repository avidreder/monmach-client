import React from 'react'
import FontIcon from 'material-ui/FontIcon'
import Paper from 'material-ui/Paper'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'
import { grey500 } from 'material-ui/styles/colors'

const iconStyles = {
  
}

export const ArtistItem = (props) => (
  <div>
    <Paper>
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text={props.artist.name} />
        </ToolbarGroup>
        <ToolbarGroup>
          { props.addToRecommended &&
            <FontIcon onClick={ props.addToRecommended } className='material-icons' style={iconStyles} color={ grey500 } hoverColor={ grey500 }>
              add</FontIcon>
          }
          { props.removeFromRecommended &&
            <FontIcon onClick={ props.removeFromRecommended } className='material-icons' style={iconStyles} color={ grey500 } hoverColor={ grey500 }>
              clear</FontIcon>
          }
        </ToolbarGroup>
      </Toolbar>
    </Paper>
  </div>
)

ArtistItem.propTypes = {
  artist: React.PropTypes.object,
  addToRecommended: React.PropTypes.func,
  removeFromRecommended: React.PropTypes.func,
}

export default ArtistItem
