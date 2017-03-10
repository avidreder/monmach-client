import React, { Component } from 'react'
import TrackActions from 'components/TrackActions'
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper'
import _ from 'lodash'

export default class TrackPlayer extends Component {
  static propTypes = {
    track: React.PropTypes.object,
    addGenre: React.PropTypes.func,
    addRating: React.PropTypes.func,
    addTrackToGenre: React.PropTypes.func,
    discardTrackFromPlayer: React.PropTypes.func,
    addArtistToGenre: React.PropTypes.func,
    removeArtistFromGenre: React.PropTypes.func,
    saveTrack: React.PropTypes.func,
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
      currentCustomGenre,
      removeArtistFromGenre,
      removeTrackFromGenre,
      discardTrackFromPlayer,
      saveTrack,
    } = this.props;
    const trackButton = _.some(currentCustomGenre.SeedTracks, (e) => e.SpotifyID == track.SpotifyID) ?
      <RaisedButton key={ `remove_${track.SpotifyTrack.id}`}
        onTouchTap={ () => removeTrackFromGenre(track) }
        label={ `Remove ${track.SpotifyTrack.name} from Genre Tracks` } /> :
      <RaisedButton key={ `add_${track.SpotifyTrack.id}`}
        onTouchTap={ () => addTrackToGenre(track) }
        label={ `Add ${track.SpotifyTrack.name} to Genre Tracks` } />
    const artistButtons = []
    track.SpotifyTrack.artists.map(artist =>
      _.some(currentCustomGenre.SeedArtists, (e) => e.id == artist.id) ?
      artistButtons.push(<RaisedButton key={ `remove_${artist.id}`}
        onTouchTap={ () => removeArtistFromGenre(artist) }
        label={ `Remove ${artist.name} from Genre Seeds` } />) :
      artistButtons.push(<RaisedButton key={ `add_${artist.id}`}
        onTouchTap={ () => addArtistToGenre(artist) }
        label={ `Add ${artist.name} to Genre Seeds` }/>))
    return(
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
            discardTrackFromPlayer={ discardTrackFromPlayer } />
        </CardText>
        <CardActions>
          { trackButton }
          { artistButtons }
        </CardActions>
      </Card>
    )
  }
}
