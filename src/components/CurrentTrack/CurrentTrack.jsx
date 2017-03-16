import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import CustomGenres from 'components/CustomGenres'
import QueueContainer from 'components/Queue'
import TrackProfile from 'components/TrackProfile'
import withEmptyState from 'components/EmptyState'
import TrackGenres from 'components/TrackGenres'
import TrackCustomGenres from 'components/TrackCustomGenres'
import {Tabs, Tab} from 'material-ui/Tabs';
import TrackPlaylists from 'components/TrackPlaylists'
import TrackPlayer from 'components/TrackPlayer'
import Badge from 'material-ui/Badge'
import { Card, CardTitle, CardText, CardHeader } from 'material-ui/Card'
import Checkbox from 'material-ui/Checkbox'
import { Grid, Row, Col } from 'react-flexbox-grid/lib'

export const CurrentTrack = (props) => {
  const artistString = props.currentTrack.SpotifyTrack.artists.map((artist) => artist.name).join(', ')
  return (
    <Row>
      <Col md={12} sm={12} lg={12} xs={12}>
        <Card initiallyExpanded={ false }>
          <CardTitle title={props.currentTrack.SpotifyTrack.name} subtitle={artistString}
            actAsExpander={ true } showExpandableButton={ true } />
          <CardText>
            <TrackPlayer
              saveTrack={ (track) => props.saveTrack(props.currentCustomGenre.ID, track) }
              currentCustomGenre={ props.currentCustomGenre }
              track={ props.currentTrack }
              addRating={ props.addRating }
              addTrackToGenre={ (track) => props.addTrackToGenre(props.currentCustomGenre.ID, track) }
              removeTrackFromGenre={ (artist) => props.removeTrackFromGenre(props.currentCustomGenre.ID, artist) }
              discardTrackFromPlayer={ (track) => props.discardTrackFromPlayer(props.currentCustomGenre.ID, track) }
              addArtistToGenre={ (artist) => props.addArtistToGenre(props.currentCustomGenre.ID, artist) }
              removeArtistFromGenre={ (artist) => props.removeArtistFromGenre(props.currentCustomGenre.ID, artist) } />
          </CardText>
          <CardText expandable={ true }>
            <TrackProfile
              chartData={ props.chartData }
              track={ props.currentTrack } />
          </CardText>
        </Card>
      </Col>
    </Row>
  )
}

CurrentTrack.propTypes = {
  currentCustomGenre: React.PropTypes.object,
  addGenre: React.PropTypes.func,
  removeFromQueue: React.PropTypes.func,
  setTrack: React.PropTypes.func,
  addRating: React.PropTypes.func,
  addTrackToGenre: React.PropTypes.func,
  addTrackToGenre: React.PropTypes.func,
  discardTrackFromQueue: React.PropTypes.func,
  discardTrackFromPlayer: React.PropTypes.func,
  currentTrack: React.PropTypes.object,
  genres: React.PropTypes.array,
  spotifyGenres: React.PropTypes.array,
  addGenre: React.PropTypes.func,
  removeGenre: React.PropTypes.func,
  addCustomGenre: React.PropTypes.func,
  removeCustomGenre: React.PropTypes.func,
  tracksFromPlaylist: React.PropTypes.func,
  addPlaylist: React.PropTypes.func,
  removePlaylist: React.PropTypes.func,
  showPopulateQueueDialog: React.PropTypes.func,
  playlists: React.PropTypes.array,
  chartData: React.PropTypes.array,
  getRecommendedTracks: React.PropTypes.func,
  saveTrack: React.PropTypes.func,
}

export default CurrentTrack
