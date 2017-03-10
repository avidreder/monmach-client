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
  <Grid fluid>
    <Row>
      <Col md={12} sm={12} lg={12} xs={12}>
        <CustomGenres customGenres={ props.genres }
          setCurrentCustomGenre={ props.setCurrentCustomGenre }
          currentCustomGenre={ props.currentCustomGenre }
          showNewGenreForm={ props.showNewGenreForm } />
      </Col>
    </Row>
    <Row>
      <Col md={6} sm={12} lg={6} xs={12}>
        <CurrentTrackWithES
          requiredData={ props.currentTrack}
          dataType={ 'Current Track'}
          message={ 'Please choose a track from the queue' }
          saveTrack={ props.saveTrack }
          {...props} />
      </Col>
      <Col md={6} sm={12} lg={6} xs={12}>
        <Tabs>
          <Tab label='Genre Tracks'>
            <CurrentQueueWithES
              activeFilters={ ['rating'] }
              filters={ props.genreTracksFilters }
              updateFilters={ props.updateFilters }
              queueTracks={ props.currentCustomGenre.TrackList }
              requiredData={ props.currentCustomGenre.TrackList }
              dataType={ 'Genre Track Queue'}
              message={ 'Listen to tracks from the new track queue' }
              {...props} />
          </Tab>
          <Tab label='New Tracks'>
            <CurrentQueueWithES
              activeFilters={ [] }
              filters={ props.genreTracksFilters }
              queueTracks={ props.queue.TrackQueue }
              requiredData={ props.queue.TrackQueue }
              dataType={ 'Track queue'}
              message={ 'Get tracks from your playlists or recommendations' }
              {...props} />
          </Tab>
        </Tabs>
      </Col>
    </Row>
    <Row>
      <Col md={12} sm={12} lg={12} xs={12}>
        <FlatButton
          label="More Tracks"
          primary={true}
          onTouchTap={ props.showPopulateQueueDialog }
        />
      </Col>
    </Row>
  </Grid>
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
  saveTrack: React.PropTypes.func,
}

export default GenrePage
