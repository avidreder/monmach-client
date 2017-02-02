import { fromJS, Map } from 'immutable'
import * as _ from 'lodash'
import testState from './testState.js'

// ------------------------------------
// Reducer
// ------------------------------------

export const SET_TEST_DATA = 'SET_TEST_DATA'

export function setTrack(state, track){
  return fromJS(Object.assign({}, state.toJS(), {
    currentTrack: track
  }))
}

export function removeFromQueue(state, track){
  let queue = state.get('queue').toJS()
  queue.TrackQueue = _.reject(queue.TrackQueue, {SpotifyID: track.SpotifyID})
  return fromJS(Object.assign({}, state.toJS(), {
    queue: queue
  }))
}

export function addSpotifyGenre(state, genre) {
  let currentTrack = state.get('currentTrack').toJS()
  currentTrack.Genres.push(genre)
  return fromJS(Object.assign({}, state.toJS(), {
    currentTrack
  }))
}

export function removeSpotifyGenre(state, genre){
  let currentTrack = state.get('currentTrack').toJS()
  currentTrack.Genres = _.without(currentTrack.Genres, genre)
  return fromJS(Object.assign({}, state.toJS(), {
    currentTrack
  }))
}

export function addCustomGenre(state, genre) {
  let currentTrack = state.get('currentTrack').toJS()
  currentTrack.CustomGenres.push(genre.ID)
  return fromJS(Object.assign({}, state.toJS(), {
    currentTrack
  }))
}

export function removeCustomGenre(state, genre){
  let currentTrack = state.get('currentTrack').toJS()
  currentTrack.CustomGenres = _.without(currentTrack.CustomGenres, genre.ID)
  return fromJS(Object.assign({}, state.toJS(), {
    currentTrack
  }))
}

export function addPlaylist(state, playlist) {
  let currentTrack = state.get('currentTrack').toJS()
  currentTrack.Playlists.push(playlist.id)
  return fromJS(Object.assign({}, state.toJS(), {
    currentTrack
  }))
}

export function removePlaylist(state, playlist){
  let currentTrack = state.get('currentTrack').toJS()
  currentTrack.Playlists = _.without(currentTrack.Playlists, playlist.id)
  return fromJS(Object.assign({}, state.toJS(), {
    currentTrack
  }))
}

export function addToListened(state, track){
  let queue = state.get('queue').toJS()
  queue.ListenedTracks.push(track.ID)
  return fromJS(Object.assign({}, state.toJS(), {
    queue: queue
  }))
}

export function addRating(state, value) {
  const currentTrack = state.get('currentTrack').toJS()
  currentTrack.Rating = value
  return fromJS(Object.assign({}, state.toJS(), {
    currentTrack: currentTrack
  }))
}

export function saveTrack(state, track) {
  console.log('Saving: ')
  console.log(track)
  return state
}

export function saveTrackSuccess(state, track) {
  console.log('Saved: ')
  console.log(track)
  return state
}

export function saveTrackError(state, error) {
  console.log('Saving error: ')
  console.log(error)
  return state
}

export function discardTrack(state, track) {
  const queue = state.get('queue').toJS()
  const nextState = removeFromQueue(setTrack(state, queue.TrackQueue[0]), queue.TrackQueue[0])
  return fromJS(Object.assign({}, nextState.toJS()))
}

export function receiveQueueSuccess(state, queue) {
  const spotifyGenres = _.uniq(_.filter(_.flatten(_.map(queue.toJS().TrackQueue, 'Genres')), null))
  return fromJS(Object.assign({}, state.toJS(), {
    queue,
    spotifyGenres,
  }))
}

export function receiveQueueError(state, error) {
  console.log('Queue error: ')
  console.log(error)
  return fromJS(Object.assign({}, state.toJS(), {
    error: error
  }))
}

export function receivePlaylistsSuccess(state, playlists) {
  return fromJS(Object.assign({}, state.toJS(), {
    playlists: playlists
  }))
}

export function receivePlaylistsError(state, error) {
  console.log('Playlists error: ')
  console.log(error)
  return fromJS(Object.assign({}, state.toJS(), {
    error: error
  }))
}

export function receivePlaylistToQueueSuccess(state, queue) {
  const spotifyGenres = _.uniq(_.filter(_.flatten(_.map(queue.toJS().TrackQueue, 'Genres')), null))
  return fromJS(Object.assign({}, state.toJS(), {
    queue,
    spotifyGenres,
  }))
}

export function receivePlaylistToQueueError(state, error) {
  console.log('Playlistto queue error: ')
  console.log(error)
  return fromJS(Object.assign({}, state.toJS(), {
    error: error
  }))
}

export default function coreReducer (state = testState, action) {
  switch (action.type) {
    case 'SET_CURRENT_TRACK':
      return setTrack(state, action.track)
    case 'REMOVE_FROM_QUEUE':
      return removeFromQueue(state, action.track)
    case 'ADD_TO_LISTENED':
      return addToListened(state, action.track)
    case 'ADD_SPOTIFY_GENRE':
      return addSpotifyGenre(state, action.genre)
    case 'REMOVE_SPOTIFY_GENRE':
      return removeSpotifyGenre(state, action.genre)
    case 'ADD_CUSTOM_GENRE':
      return addCustomGenre(state, action.genre)
    case 'REMOVE_CUSTOM_GENRE':
      return removeCustomGenre(state, action.genre)
    case 'ADD_PLAYLIST':
      return addPlaylist(state, action.playlist)
    case 'REMOVE_PLAYLIST':
      return removePlaylist(state, action.playlist)
    case 'ADD_RATING':
      return addRating(state, action.value)
    case 'SAVE_TRACK':
      return saveTrack(state, action.track)
    case 'SAVE_TRACK_SUCCESS':
      return saveTrackSuccess(state, action.track)
    case 'SAVE_TRACK_ERROR':
      return saveTrackError(state, action.error)
    case 'DISCARD_TRACK':
      return discardTrack(state, action.track)
    case 'ADD_RATING':
      return addRating(state, action.value)
    case 'REQUEST_QUEUE':
      return state
    case 'RECEIVE_QUEUE_SUCCESS':
      return receiveQueueSuccess(state, action.queue)
    case 'RECEIVE_QUEUE_ERROR':
      return receiveQueueError(state, action.error)
    case 'REQUEST_PLAYLISTS':
      return state;
    case 'RECEIVE_PLAYLISTS_SUCCESS':
      return receivePlaylistsSuccess(state, action.playlists);
    case 'RECEIVE_PLAYLISTS_ERROR':
      return receivePlaylistsError(state, action.error
    );
    case 'REQUEST_PLAYLIST_TO_QUEUE':
      return state;
    case 'RECEIVE_PLAYLIST_TO_QUEUE_SUCCESS':
      return receivePlaylistToQueueSuccess(state, action.playlists);
    case 'RECEIVE_PLAYLISTS_TO_QUEUE_ERROR':
      return receivePlaylistToQueueError(state, action.error
    );
    case 'SET_STATE':
      return state.merge(action.state);
    default:
      if (!Map.isMap(state)) {
        state = state.fromJS()
      }
      return state
    }
}
