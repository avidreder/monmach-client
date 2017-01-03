import React from 'react'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

export const TrackGenres = (props) => (
  <div>
    <Card>
      <CardHeader title='Track Genre' />
      <CardText>
        <DropDownMenu value={props.track.artists} >
          {props.track.artists.map(artist =>
            <MenuItem key={artist.id} value={artist.name} primaryText={artist.name} />
          )}
        </DropDownMenu>
      </CardText>
    </Card>
  </div>
)

// <DropDownMenu value={props.track.Genres[0]} >

TrackGenres.propTypes = {
  track: React.PropTypes.object
}

export default TrackGenres
