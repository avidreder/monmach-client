import React, { Component } from 'react'
import TrackActions from 'components/TrackActions'
import { Card, CardTitle, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper'

export default class TrackPlayer extends Component {
  static propTypes = {
    track: React.PropTypes.object,
    addGenre: React.PropTypes.func,
    addRating: React.PropTypes.func,
    addTrackToGenre: React.PropTypes.func,
    discardTrackFromPlayer: React.PropTypes.func,
    addArtistToGenre: React.PropTypes.func,
    removeArtistFromGenre: React.PropTypes.func,
  }
  constructor(props) {
    super(props)
  }
  render(){
    const {
      track,
      addRating,
      addTrackToGenre,
      addArtistToGenre,
      removeArtistFromGenre,
      removeTrackFromGenre,
      discardTrackFromPlayer,
    } = this.props;
    return(<div>
      <Card>
        <CardTitle title={track.SpotifyTrack.name} />
        <CardText>
          <RaisedButton
            onTouchTap={ () => removeTrackFromGenre(track) }
            label={ `Remove ${track.SpotifyTrack.name}` }
          />
          { track.SpotifyTrack.artists.map(artist =>
            <div key={ `${artist.id}`} >
              <RaisedButton
                onTouchTap={ () => addArtistToGenre(artist) }
                label={ `Add ${artist.name}` }
              />
              <RaisedButton
                onTouchTap={ () => removeArtistFromGenre(artist) }
                label={ `Remove ${artist.name}` }
              />
            </div>
          )}
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
