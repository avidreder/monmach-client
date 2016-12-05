import React from 'react'
import TrackActions from 'components/TrackActions'
import { Card, CardTitle, CardText } from 'material-ui/Card'
import Paper from 'material-ui/Paper'

export const TrackPlayer = (props) => (
  <div>
    <Card>
      <CardTitle title={props.track.Name} subtitle={props.track.Artists} />
      <CardText>
        <Paper>
          <iframe id='externalPlayer'
            src={'https://embed.spotify.com/?uri=spotify:track:' +
              props.track.SpotifyID}
            width='100%' height='80'
            frameBorder='0'
            allowTransparency='true' />
        </Paper>
        <TrackActions track={props.track} addGenre={props.addGenre} />
      </CardText>
    </Card>
  </div>
)

TrackPlayer.propTypes = {
  track: React.PropTypes.object,
  addGenre: React.PropTypes.func
}

export default TrackPlayer
