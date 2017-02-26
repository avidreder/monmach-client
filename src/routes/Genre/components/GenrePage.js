import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import CustomGenres from 'components/CustomGenres'
import QueueContainer from 'components/Queue'
import TrackProfile from 'components/TrackProfile'
import withEmptyState from 'components/EmptyState'
import CurrentTrack from 'components/CurrentTrack'
import CurrentQueue from 'components/CurrentQueue'
import TrackGenres from 'components/TrackGenres'
import TrackCustomGenres from 'components/TrackCustomGenres'
import {Tabs, Tab} from 'material-ui/Tabs';
import TrackPlaylists from 'components/TrackPlaylists'
import TrackPlayer from 'components/TrackPlayer'
import Badge from 'material-ui/Badge'
import { Card, CardTitle, CardText, CardHeader } from 'material-ui/Card'
import Checkbox from 'material-ui/Checkbox';
import { Grid, Row, Col } from 'react-flexbox-grid/lib'
import './GenrePage.scss'

const genreName = 'My Custom Genre'

const CurrentTrackWithES = withEmptyState(CurrentTrack)
const CurrentQueueWithES = withEmptyState(CurrentQueue)

export const GenrePage = (props) => (
  <div>
    <Grid fluid>
      <Row>
        <Col md={12} sm={12} lg={12}>
          <CustomGenres customGenres={ props.genres }
            setCurrentCustomGenre={ props.setCurrentCustomGenre }
            currentCustomGenre={ props.currentCustomGenre }
            showNewGenreForm={ props.showNewGenreForm } />
        </Col>
      </Row>
      <Row>
        <Col md={6} sm={6} lg={6}>
          <CurrentTrackWithES
            requiredData={ props.currentTrack}
            dataType={ 'Current Track'}
            message={ 'Please choose a track from the queue' }
            {...props} />
        </Col>
        <Col md={6} sm={6} lg={6}>
          <CurrentQueueWithES
            requiredData={ props.queue}
            dataType={ 'Track queue'}
            message={ 'Get tracks from your playlists or recommendations' }
            {...props} />
        </Col>
      </Row>
      <Row>
        <Col md={12} sm={12} lg={12}>
          <FlatButton
            label="More Tracks"
            primary={true}
            onTouchTap={ props.showPopulateQueueDialog }
          />
        </Col>
      </Row>
    </Grid>
  </div>
)

GenrePage.propTypes = {
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
}

export default GenrePage
