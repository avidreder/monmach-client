import React, { Component } from 'react'
import TrackActions from 'components/TrackActions'
import { Card, CardTitle, CardText } from 'material-ui/Card'
import Paper from 'material-ui/Paper'

export default class TrackPlayer extends Component {
  static propTypes = {
    track: React.PropTypes.object,
    addGenre: React.PropTypes.func,
    addRating: React.PropTypes.func,
    addTrackToGenre: React.PropTypes.func,
    discardTrackFromPlayer: React.PropTypes.func,
  }
  constructor(props) {
    super(props)
  }
  render(){
    const {
      track,
      addRating,
      addTrackToGenre,
      discardTrackFromPlayer,
    } = this.props;
    return(<div>
      <Card>
        <CardTitle title={track.SpotifyTrack.name} />
        <CardText>
          <Paper>
            <iframe id='externalPlayer'
              src={'https://embed.spotify.com/?uri=spotify:track:' +
                track.SpotifyID}
              width='100%' height='80'
              frameBorder='0'
              allowTransparency='true' />
          </Paper>
          <TrackActions track={ track }
            addRating={ addRating }
            addTrackToGenre={ addTrackToGenre }
            discardTrackFromPlayer={ discardTrackFromPlayer } />
        </CardText>
      </Card>
    </div>)
  }
}
