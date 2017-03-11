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

export const CurrentTrack = (props) => (
  <div>
    <Row>
      <Col md={12} sm={12} lg={12} xs={12}>
        <Card>
          <CardTitle title='Currently Playing' />
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
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md={12} sm={12} lg={12} xs={12}>
        <TrackProfile
          chartData={ props.chartData }
          track={ props.currentTrack } />
      </Col>
    </Row>
  </div>
)

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
