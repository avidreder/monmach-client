import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
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
import Checkbox from 'material-ui/Checkbox';
import { Grid, Row, Col } from 'react-flexbox-grid/lib'
import FontIcon from 'material-ui/FontIcon'
import { amber500 } from 'material-ui/styles/colors'

const fontIconStyles = {
  cursor: 'pointer',
}

const filterTracks = (tracks, filters) => {
  console.log(filters)
  let filteredTracks = _.includes(filters.active, 'rating') ?
    _.filter(tracks, (track) => track.Rating >= filters.rating) : tracks
  console.log(filteredTracks)
  filteredTracks = _.includes(filters.active, 'genres') ?
    _.filter(tracks, (track) => _.intersection(track.Genres, filters.genres).length > 0) : filteredTracks
  console.log(filteredTracks)
  filteredTracks = _.includes(filters.active, 'artists') ?
    _.filter(tracks, (track) => _.intersection(_.map(track.SpotifyTrack.artists, 'name'), filters.artists).length > 0) : filteredTracks
  return filteredTracks
}

export const CurrentQueue = (props) => {
  const filteredTracks = filterTracks(props.queueTracks, props.filters)
  return (
    <Card>
      <CardTitle title={ props.title }>
        <RaisedButton
          label="More Tracks"
          primary={true}
          onTouchTap={ props.showPopulateQueueDialog }
        />
        <RaisedButton label='Clear Queue' onTouchTap={ props.clearQueue } />
        <RaisedButton
          label="Filters"
          onTouchTap={ props.showFilterDialog }
        />
      </CardTitle>
      <CardText>
        <QueueContainer queue={ filteredTracks }
          removeFromQueue={props.removeFromQueue}
          setTrack={props.setTrack}
          discardTrackFromQueue={ (track) => props.discardTrackFromQueue(props.currentCustomGenre.ID, track) }
          addGenre={props.addGenre} />
      </CardText>
    </Card>
  )
}

CurrentQueue.propTypes = {
  showFilterDialog: React.PropTypes.func,
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
  clearQueue: React.PropTypes.func,
  queueTracks: React.PropTypes.array,
}

export default CurrentQueue
