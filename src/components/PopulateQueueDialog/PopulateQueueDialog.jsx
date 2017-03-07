import React, { Component } from 'react'
import Playlists from 'components/Playlists'
import GenreSeeds from 'components/GenreSeeds'
import RecommendationSeeds from 'components/RecommendationSeeds'
import { connect } from 'react-redux'
import { Card, CardTitle, CardText, CardHeader } from 'material-ui/Card'
import Paper from 'material-ui/Paper'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import {Tabs, Tab} from 'material-ui/Tabs';
import withEmptyState from 'components/EmptyState'

import * as actionCreators from 'store/coreActionCreators'
import _ from 'lodash'

const PlaylistsWithES = withEmptyState(Playlists)
const RecommendationSeedsWithES = withEmptyState(RecommendationSeeds)
const GenreSeedsWithES = withEmptyState(GenreSeeds)
const QueueSeedsWithES = withEmptyState(GenreSeeds)

class PopulateQueueDialogContainer extends Component {
  static propTypes = {
    populateQueueDialogOpen: React.PropTypes.bool,
    tracksFromPlaylist: React.PropTypes.func,
    currentCustomGenre: React.PropTypes.object,
    recommendationSeeds: React.PropTypes.object,
    hidePopulateQueueDialog: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
  }

  handleActionTouchTap = () => {
    const { hidePopulateQueueDialog } = this.props
    hidePopulateQueueDialog()
  }

  handleRequestClose = () => {
    const { hidePopulateQueueDialog } = this.props
    hidePopulateQueueDialog()
  }

  render() {
    const {
      addToRecommended,
      removeFromRecommended,
      recommendationSeeds,
      populateQueueDialogOpen,
      getRecommendedTracks,
      currentCustomGenre,
      playlists,
      queueTracks,
      queueArtists,
      tracksFromPlaylist,
    } = this.props

    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={ this.handleActionTouchTap }
      />,
    ]
    const customContentStyle = {
      width: '100%',
      maxWidth: 'none',
    }
    return (
      <div>
        <Dialog open={populateQueueDialogOpen}
          onRequestClose={this.handleRequestClose}
          onActionTouchTap={this.handleActionTouchTap}
          autoScrollBodyContent={true}
          actions={ actions }
          contentStyle={ customContentStyle } >
          <Tabs>
            <Tab label="Playlists">
              <Card>
                <CardText>
                  <PlaylistsWithES
                    requiredData={ playlists }
                    dataType={ 'Playlists' }
                    message={ 'Create playlists on Spotify' }
                    playlists={ playlists }
                    tracksFromPlaylist={ tracksFromPlaylist } />
                </CardText>
              </Card>
            </Tab>
            <Tab label="Recommend">
              <RecommendationSeedsWithES
                requiredData={ _.flatten(_.values(recommendationSeeds)) }
                dataType={ 'Recommendation Seeds' }
                message={ 'Add seeds to recommendation engine below' }
                recommendationSeeds={ recommendationSeeds }
                removeFromRecommended={ removeFromRecommended }
                getRecommendedTracks={ getRecommendedTracks }/>
              <GenreSeedsWithES
                tracks={ currentCustomGenre.SeedTracks }
                artists={ currentCustomGenre.SeedArtists }
                name={ currentCustomGenre.Name }
                labelKey={ 'genre' }
                addToRecommended={ addToRecommended }
                requiredData={ currentCustomGenre }
                dataType={ 'Genre Seeds' }
                message={ 'Add seeds to genre from queue' }
                currentCustomGenre={ currentCustomGenre }
                queueTracks={ queueTracks }
                queueArtists={ queueArtists } />
              <QueueSeedsWithES
                tracks={ queueTracks }
                artists={ queueArtists }
                name={ 'Seeds from your Queue' }
                labelKey={ 'queue' }
                addToRecommended={ addToRecommended }
                requiredData={ queueTracks }
                dataType={ 'Genre Seeds' }
                message={ 'Add seeds to genre from queue' }
                currentCustomGenre={ currentCustomGenre } />
            </Tab>
          </Tabs>
        </Dialog>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  hidePopulateQueueDialog: () => {
    dispatch(actionCreators.hidePopulateQueueDialog())
  },
  tracksFromPlaylist: (playlist) => {
    dispatch(actionCreators.tracksFromPlaylist(playlist.id))
  },
  addToRecommended: (itemType, item) => {
    dispatch(actionCreators.addToRecommended(itemType, item))
  },
  removeFromRecommended: (itemType, item) => {
    dispatch(actionCreators.removeFromRecommended(itemType, item))
  },
  getRecommendedTracks: (tracks, artists, genres) => {
    dispatch(actionCreators.getRecommendedTracksThunk(tracks, artists, genres))
  }
})

const mapStateToProps = (state) => {
  const queue = state.core.get('queue').toJS()
  const queueTracks = queue.TrackQueue || []
  const queueArtists = _.uniqBy((_.flatten(_.map(queueTracks, 'SpotifyTrack.artists'))), 'id')
  return {
    populateQueueDialogOpen: state.core.get('populateQueueDialogOpen'),
    spotifyGenres: state.core.get('spotifyGenres').toJS(),
    playlists: state.core.get('playlists').toJS(),
    currentCustomGenre: state.core.get('currentCustomGenre').toJS(),
    recommendationSeeds: state.core.get('recommendationSeeds').toJS(),
    queueTracks,
    queueArtists,
  }
}

const PopulateQueueDialog = connect(mapStateToProps, mapDispatchToProps)(PopulateQueueDialogContainer)

export default PopulateQueueDialog
