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
  setTrack: (track) => {
    dispatch(actionCreators.setTrack(track))
    dispatch(actionCreators.removeFromQueue(track))
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
  addRating: (value) => {
    dispatch(actionCreators.addRating(value))
  }
})

const mapStateToProps = (state) => ({
  currentTrack: state.core.get('currentTrack').toJS(),
  queue: state.core.get('queue').toJS(),
  genres: state.core.get('genres').toJS(),
  spotifyGenres: state.core.get('spotifyGenres').toJS(),
  playlists: state.core.get('playlists').toJS()
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
