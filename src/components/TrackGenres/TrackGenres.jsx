import React from 'react'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import DropDownMenu from 'material-ui/DropDownMenu'
import Checkbox from 'material-ui/Checkbox';
import MenuItem from 'material-ui/MenuItem'
import * as _ from 'lodash'

export const TrackGenres = (props) => (
  <div>
    <Card>
      <CardHeader title='Track Spotify Genres' />
      <CardText>
        {props.spotifyGenres.map(genre =>
          <Checkbox
            key={ genre }
            label={ genre }
            checked={ _.includes(props.track.Genres, genre)}
          />
        )}
      </CardText>
    </Card>
    <Card>
      <CardHeader title='Track Custom Genres' />
      <CardText>
        {props.genres.map(genre =>
          <Checkbox
            key={ genre.ID }
            label={ genre.Name }
            checked={ _.includes(props.track.CustomGenres, genre)}
          />
        )}
      </CardText>
    </Card>
  </div>
)

// <DropDownMenu value={props.track.Genres[0]} >

TrackGenres.propTypes = {
  track: React.PropTypes.object,
  genres: React.PropTypes.array,
  spotifyGenres: React.PropTypes.array,
}

export default TrackGenres
