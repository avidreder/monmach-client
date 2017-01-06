import React from 'react'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

export const TrackGenres = (props) => (
  <div>
    <Card>
      <CardHeader title='Track Genre' />
      <CardText>

      </CardText>
    </Card>
  </div>
)

// <DropDownMenu value={props.track.Genres[0]} >
// <DropDownMenu value={props.track.Genres} >
//   {props.track.Genres.map(genre =>
//     <MenuItem key={genre.id} value={genre.name} primaryText={genre.name} />
//   )}
// </DropDownMenu>

TrackGenres.propTypes = {
  track: React.PropTypes.object
}

export default TrackGenres
