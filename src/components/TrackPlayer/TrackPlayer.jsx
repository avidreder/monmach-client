import React, { Component } from 'react'
import TrackActions from 'components/TrackActions'
import { Card, CardTitle, CardText } from 'material-ui/Card'
import Paper from 'material-ui/Paper'

export default class TrackPlayer extends Component {
  static propTypes = {
    track: React.PropTypes.object,
    addGenre: React.PropTypes.func,
    addRating: React.PropTypes.func,
    saveTrack: React.PropTypes.func,
    discardTrack: React.PropTypes.func,
  }
  constructor(props) {
    super(props)
  }
  render(){
    const {
      track,
      addRating,
      saveTrack,
      discardTrack,
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
            saveTrack={ saveTrack }
            discardTrack={ discardTrack } />
        </CardText>
      </Card>
    </div>)
  }
}
