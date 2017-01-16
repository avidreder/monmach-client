import React from 'react'
import TrackActions from 'components/TrackActions'
import { Card, CardTitle, CardText } from 'material-ui/Card'
import Paper from 'material-ui/Paper'

export const TrackPlayer = (props) => (
  <div>
    <Card>
      <CardTitle title={props.track.SpotifyTrack.name} />
      <CardText>
        <Paper>
          <iframe id='externalPlayer'
            src={'https://embed.spotify.com/?uri=spotify:track:' +
              props.track.SpotifyID}
            width='100%' height='80'
            frameBorder='0'
            allowTransparency='true' />
        </Paper>
        <TrackActions track={props.track}
          addRating={ props.addRating }
          saveTrack={ props.saveTrack }
          discardTrack={ props.discardTrack } />
      </CardText>
    </Card>
  </div>
)

TrackPlayer.propTypes = {
  track: React.PropTypes.object,
  addGenre: React.PropTypes.func,
  addRating: React.PropTypes.func,
  saveTrack: React.PropTypes.func,
  discardTrack: React.PropTypes.func,
}

export default TrackPlayer
