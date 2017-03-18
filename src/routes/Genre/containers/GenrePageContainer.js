import { connect } from 'react-redux'
import * as actionCreators from 'store/coreActionCreators'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import GenrePage from '../components/GenrePage'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = (dispatch) => ({
  showGenreFilterDialog: () => {
    dispatch(actionCreators.showGenreFilterDialog())
  },
  showNewTrackFilterDialog: () => {
    dispatch(actionCreators.showNewTrackFilterDialog())
  },
  updateFilters: (filter, value) => {
    dispatch(actionCreators.updateFilters(filter, value))
  },
  showNewGenreForm: () => {
    dispatch(actionCreators.showNewGenreForm())
  },
  showPopulateQueueDialog: () => {
    dispatch(actionCreators.showPopulateQueueDialog())
  },
  setTrack: (track) => {
    dispatch(actionCreators.setTrack(track))
    dispatch(actionCreators.removeFromQueue(track))
  },
  setCurrentCustomGenre: (genre) => {
    dispatch(actionCreators.setCurrentCustomGenre(genre))
  },
  addSpotifyGenre: (genre) => {
    dispatch(actionCreators.addSpotifyGenre(genre))
  },
  removeSpotifyGenre: (genre) => {
    dispatch(actionCreators.removeSpotifyGenre(genre))
  },
  addCustomGenre: (genre) => {
    dispatch(actionCreators.addCustomGenre(genre))
  },
  removeCustomGenre: (genre) => {
    dispatch(actionCreators.removeCustomGenre(genre))
  },
  addPlaylist: (playlist) => {
    dispatch(actionCreators.addPlaylist(playlist))
  },
  removePlaylist: (playlist) => {
    dispatch(actionCreators.removePlaylist(playlist))
  },
  addRating: (value) => {
    dispatch(actionCreators.addRating(value))
  },
  addTrackToGenre: (genreId, track) => {
    dispatch(actionCreators.addTrackToGenre(genreId, track))
  },
  addGenreToGenre: (genreId, genre) => {
    dispatch(actionCreators.addGenreToGenre(genreId, genre))
  },
  addArtistToGenre: (genreId, artist) => {
    dispatch(actionCreators.addArtistToGenre(genreId, artist))
  },
  removeArtistFromGenre: (genreId, artist) => {
    dispatch(actionCreators.removeArtistFromGenre(genreId, artist))
  },
  removeGenreFromGenre: (genreId, genre) => {
    dispatch(actionCreators.removeGenreFromGenre(genreId, genre))
  },
  removeTrackFromGenre: (genreId, track) => {
    dispatch(actionCreators.removeTrackFromGenre(genreId, track))
  },
  discardTrackFromPlayer: (genreId, track) => {
    dispatch(actionCreators.discardTrackFromPlayerThunk(genreId, track))
  },
  discardTrackFromQueue: (genreId, track) => {
    dispatch(actionCreators.discardTrackFromQueueThunk(genreId, track))
  },
  tracksFromPlaylist: (playlist) => {
    dispatch(actionCreators.tracksFromPlaylist(playlist.id))
  },
  removeFromQueue: (track) => {
    dispatch(actionCreators.removeFromQueue(track))
  },
  clearQueue: () => {
    dispatch(actionCreators.clearQueue())
  },
  saveTrack: (queueId, track) => {
    dispatch(actionCreators.saveTrack(queueId, track))
  },
})

const makeChartData = (features) => {
  let chartData = []
  Object.keys(features).map((key) => {
    if (['id','uri','track_href','analysis_url','key','mode','time_signature','duration_ms','tempo','loudness'].indexOf(key) === -1) {
      let chartItem = {}
      chartItem.feature = key.toString().charAt(0).toUpperCase() + key.toString().slice(1)
      chartItem.value = features[key]
      chartData.push(chartItem)
    }
  })
  return chartData
}

const mapStateToProps = (state) => ({
  currentCustomGenre: state.core.get('currentCustomGenre').toJS(),
  currentTrack: state.core.get('currentTrack').toJS(),
  chartData: state.core.get('currentTrack').toJS().Features ? makeChartData(state.core.get('currentTrack').toJS().Features) : [],
  queue: state.core.get('queue').toJS(),
  genres: state.core.get('genres').toJS(),
  spotifyGenres: state.core.get('spotifyGenres').toJS(),
  playlists: state.core.get('playlists').toJS(),
  recommendationSeeds: state.core.get('recommendationSeeds').toJS(),
  genreTrackFilters: state.core.get('genreTrackFilters').toJS(),
  newTrackFilters: state.core.get('newTrackFilters').toJS(),
})

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const counter = (state) => state.counter
    const tripleCount = createSelector(counter, (count) => count * 3)
    const mapStateToProps = (state) => ({
      counter: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, mapDispatchToProps)(GenrePage)
