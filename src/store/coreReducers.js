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

export function setCurrentCustomGenre(state, genre){
  return fromJS(Object.assign({}, state.toJS(), {
    currentCustomGenre: genre
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

export function addTrackToGenre(state, track) {
  console.log('Saving: ')
  console.log(track)
  return state
}

export function addTrackToGenreSuccess(state, track) {
  console.log('Saved: ')
  console.log(track)
  return state
}

export function addTrackToGenreError(state, error) {
  console.log('Saving error: ')
  console.log(error)
  return state
}

export function discardTrackFromQueue(state, track) {
  const queue = state.get('queue').toJS()
  const nextState = removeFromQueue(state, track)
  return fromJS(Object.assign({}, nextState.toJS()))
}

export function discardTrackFromPlayer(state, track) {
  const queue = state.get('queue').toJS()
  const nextState = removeFromQueue(setTrack(state, queue.TrackQueue[0]), queue.TrackQueue[0])
  return fromJS(Object.assign({}, nextState.toJS()))
}

export function setLoading(state, endpoint) {
  return state.setIn(['data', endpoint,'loading'], true)
}

export function unSetLoading(state, endpoint) {
  return state.setIn(['data', endpoint,'loading'], false)
}

export function setResponse(state, endpoint, response) {
  return state.setIn(['data', endpoint, 'response'], response)
}

export function unSetResponse(state, endpoint) {
  return state.deleteIn(['data', endpoint, 'response'])
}

export function setError(state, endpoint, error) {
  return state.setIn(['data', endpoint, 'error'], error)
}

export function unSetError(state, endpoint) {
  return state.deleteIn(['data', endpoint, 'error'])
}

export function receiveQueueSuccess(state, response) {
  const queue = fromJS(response.data)
  const spotifyGenres = _.uniq(_.filter(_.flatten(_.map(queue.toJS().TrackQueue, 'Genres')), null))
  const newState = fromJS(Object.assign({}, state.toJS(), {
    queue,
    spotifyGenres,
  }))
  return unSetLoading(setResponse(newState, 'queue', fromJS(response)), 'queue')
}

export function receiveQueueError(state, error) {
  const newState = fromJS(Object.assign({}, state.toJS()))
  return setError(unSetResponse(newState, 'queue'), 'queue', fromJS(error))
}

export function receiveGenresSuccess(state, response) {
  const genres = fromJS(response.data)
  const newState = fromJS(Object.assign({}, state.toJS(), {
    genres: genres.toJS()
  }))
  return unSetLoading(setResponse(newState, 'genres', fromJS(response)), 'genres')
}

export function receiveGenresError(state, error) {
  console.log('receiveGenresError')
  const newState = fromJS(Object.assign({}, state.toJS()))
  return setError(unSetResponse(newState, 'genres'), 'genres', fromJS(error))
}

export function receivePlaylistsSuccess(state, response) {
  const playlists = fromJS(response.data.items)
  const newState = fromJS(Object.assign({}, state.toJS(), {
    playlists: playlists.toJS()
  }))
  return unSetLoading(setResponse(newState, 'playlists', fromJS(response)), 'playlists')
}

export function receivePlaylistsError(state, error) {
  console.log('receivePlaylistsError')
  const newState = fromJS(Object.assign({}, state.toJS()))
  return setError(unSetResponse(newState, 'playlists'), 'playlists', fromJS(error))
}

export function receiveTracksFromPlaylistSuccess(state, response) {
  let newQueue = state.get('queue').toJS()
  const tracks = fromJS(response.data)
  const trackQueue = state.getIn(['queue','TrackQueue']).toJS()
  newQueue.TrackQueue = trackQueue.concat(tracks.toJS())
  const spotifyGenres = _.uniq(_.filter(_.flatten(_.map(newQueue.TrackQueue, 'Genres')), null))
  const newState = fromJS(Object.assign({}, state.toJS(), {
    queue: newQueue,
    spotifyGenres,
  }))
  return unSetLoading(setResponse(newState, 'tracks', fromJS(response)), 'tracks')
}

export function receiveTracksFromPlaylistError(state, error) {
  console.log('receiveTracksFromPlaylistError')
  const newState = fromJS(Object.assign({}, state.toJS()))
  return setError(unSetResponse(newState, 'tracks'), 'tracks', fromJS(error))
}

export default function coreReducer (state = testState, action) {
  switch (action.type) {
    case 'SET_CURRENT_TRACK':
      return setTrack(state, action.track)
    case 'SET_CURRENT_CUSTOM_GENRE':
      return setCurrentCustomGenre(state, action.genre)
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
      return addTrackToGenre(state, action.track)
    case 'SAVE_TRACK_SUCCESS':
      return addTrackToGenreSuccess(state, action.track)
    case 'SAVE_TRACK_ERROR':
      return addTrackToGenreError(state, action.error)
    case 'DISCARD_TRACK_FROM_QUEUE':
      return discardTrackFromQueue(state, action.track)
    case 'DISCARD_TRACK_FROM_PLAYER':
      return discardTrackFromPlayer(state, action.track)
    case 'ADD_RATING':
      return addRating(state, action.value)
    case 'REQUEST_QUEUE':
      return setLoading(state, 'queue')
    case 'RECEIVE_QUEUE_SUCCESS':
      return receiveQueueSuccess(state, action.response)
    case 'RECEIVE_QUEUE_ERROR':
      return receiveQueueError(state, action.error)
    case 'REQUEST_GENRES':
      return setLoading(state, 'genres')
    case 'RECEIVE_GENRES_SUCCESS':
      return receiveGenresSuccess(state, action.response)
    case 'RECEIVE_GENRES_ERROR':
      return receiveGenresError(state, action.error)
    case 'REQUEST_PLAYLISTS':
      return setLoading(state, 'playlists')
    case 'RECEIVE_PLAYLISTS_SUCCESS':
      return receivePlaylistsSuccess(state, action.response);
    case 'RECEIVE_PLAYLISTS_ERROR':
      return receivePlaylistsError(state, action.error);
    case 'REQUEST_TRACKS_FROM_PLAYLIST':
      return setLoading(state, 'tracks')
    case 'RECEIVE_TRACKS_FROM_PLAYLIST_SUCCESS':
      return receiveTracksFromPlaylistSuccess(state, action.response);
    case 'RECEIVE_TRACKS_FROM_PLAYLIST_ERROR':
      return receiveTracksFromPlaylistError(state, action.error);
    case 'SET_STATE':
      return state.merge(action.state);
    default:
      if (!Map.isMap(state)) {
        state = state.fromJS()
      }
      return state
    }
}
