var request = require('request')
var axios = require('axios')
const querystring = require('querystring')
const serverAddress = config ? config.browser_client_path : 'https://app.monmach.com'
request = request.defaults({jar: true})
import _ from 'lodash';
import { fromJS } from 'immutable'
import cookie from 'react-cookie';
import { updateLocation } from './location'
import { browserHistory } from 'react-router'

export function addToTracks(track) {
  return {
    type: 'ADD_TO_TRACKS',
    track
  };
}

export function removeFromTracks(track) {
  return {
    type: 'REMOVE_FROM_TRACKS',
    track
  };
}

export function updateFilters(filterType, filters) {
  return {
    type: 'UPDATE_FILTERS',
    filterType,
    filters,
  };
}

export function clearQueue(state) {
  return {
    type: 'CLEAR_QUEUE',
    state
  };
}

export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function setTrack(track) {
  return {
    type: 'SET_CURRENT_TRACK',
    track
  };
}

export function setCurrentCustomGenre(genre) {
  return {
    type: 'SET_CURRENT_CUSTOM_GENRE',
    genre
  };
}

export function removeFromQueue(track) {
  return {
    type: 'REMOVE_FROM_QUEUE',
    track
  };
}

export function addSpotifyGenre(genre) {
  return {
    type: 'ADD_SPOTIFY_GENRE',
    genre
  };
}

export function removeSpotifyGenre(genre) {
  return {
    type: 'REMOVE_SPOTIFY_GENRE',
    genre
  };
}

export function addCustomGenre(genre) {
  return {
    type: 'ADD_CUSTOM_GENRE',
    genre
  };
}

export function removeCustomGenre(genre) {
  return {
    type: 'REMOVE_CUSTOM_GENRE',
    genre
  };
}

export function addPlaylist(playlist) {
  return {
    type: 'ADD_PLAYLIST',
    playlist
  };
}

export function removePlaylist(playlist) {
  return {
    type: 'REMOVE_PLAYLIST',
    playlist
  };
}

export function addGenre(track) {
  return {
    type: 'ADD_GENRE',
    track
  };
}

export function addRating(value) {
  return {
    type: 'ADD_RATING',
    value
  };
}

export function requestTrackSave(track) {
  return {
    type: 'SAVE_TRACK',
    track
  };
}

export function trackSaveSuccess(track) {
  return {
    type: 'SAVE_TRACK_SUCCESS',
    track
  };
}

export function trackSaveError(error) {
  return {
    type: 'SAVE_TRACK_ERROR',
    error
  };
}

export function discardTrackFromPlayer(track) {
  return {
    type: 'DISCARD_TRACK_FROM_PLAYER',
    track
  };
}

export function discardTrackFromQueue(track) {
  return {
    type: 'DISCARD_TRACK_FROM_QUEUE',
    track
  };
}

export function requestQueue() {
  return {
    type: 'REQUEST_QUEUE'
  }
}

export function receiveQueueSuccess(response) {
  return {
    type: 'RECEIVE_QUEUE_SUCCESS',
    response: response
  }
}

export function receiveQueueError(error) {
  return {
    type: 'RECEIVE_QUEUE_ERROR',
    error: error
  }
}

export function requestGenres() {
  return {
    type: 'REQUEST_GENRES'
  }
}

export function receiveGenresSuccess(response) {
  return {
    type: 'RECEIVE_GENRES_SUCCESS',
    response: response
  }
}

export function receiveGenresError(error) {
  return {
    type: 'RECEIVE_GENRES_ERROR',
    error: error
  }
}

export function requestPlaylists() {
  return {
    type: 'REQUEST_PLAYLISTS'
  }
}

export function receivePlaylistsSuccess(response) {
  return {
    type: 'RECEIVE_PLAYLISTS_SUCCESS',
    response: response
  }
}

export function receivePlaylistsError(error) {
  return {
    type: 'RECEIVE_PLAYLISTS_ERROR',
    error: error
  }
}

export function requestTracksFromPlaylist() {
  return {
    type: 'REQUEST_TRACKS_FROM_PLAYLIST'
  }
}

export function receiveTracksFromPlaylistSuccess(response) {
  return {
    type: 'RECEIVE_TRACKS_FROM_PLAYLIST_SUCCESS',
    response: response
  }
}

export function requestGetRecommendedTracks() {
  return {
    type: 'REQUEST_GET_RECOMMENDED_TRACKS'
  }
}

export function getRecommendedTracksError(error) {
  return {
    type: 'GET_RECOMMENDED_TRACKS_ERROR',
    error: error
  }
}

export function getRecommendedTracksSuccess(response) {
  return {
    type: 'GET_RECOMMENDED_TRACKS_SUCCESS',
    response: response
  }
}

export function receiveTracksFromPlaylistError(error) {
  return {
    type: 'RECEIVE_TRACKS_FROM_PLAYLIST_ERROR',
    error: error
  }
}

export function removeFromRecommended(itemType, item) {
  return {
    type: 'REMOVE_FROM_RECOMMENDED',
    itemType,
    item
  }
}

export function addToRecommended(itemType, item) {
  return {
    type: 'ADD_TO_RECOMMENDED',
    itemType,
    item
  }
}

export function hideNewGenreForm() {
  return {
    type: 'HIDE_NEW_GENRE_FORM',
  }
}

export function showNewGenreForm() {
  return {
    type: 'SHOW_NEW_GENRE_FORM',
  }
}

export function hideGenreFilterDialog() {
  return {
    type: 'HIDE_GENRE_FILTER_DIALOG',
  }
}

export function hideNewTrackFilterDialog() {
  return {
    type: 'HIDE_NEW_TRACK_FILTER_DIALOG',
  }
}

export function showGenreFilterDialog() {
  return {
    type: 'SHOW_GENRE_FILTER_DIALOG',
  }
}

export function showNewTrackFilterDialog() {
  return {
    type: 'SHOW_NEW_TRACK_FILTER_DIALOG',
  }
}

export function hidePopulateQueueDialog() {
  return {
    type: 'HIDE_POPULATE_QUEUE_DIALOG',
  }
}

export function showPopulateQueueDialog() {
  return {
    type: 'SHOW_POPULATE_QUEUE_DIALOG',
  }
}

export function removeFromGenre(itemType, item) {
  return {
    type: 'REMOVE_FROM_GENRE',
    itemType,
    item
  }
}

export function addToGenre(itemType, item) {
  return {
    type: 'ADD_TO_GENRE',
    itemType,
    item
  }
}

export function setUser(data) {
  return {
    type: 'SET_USER',
    email: data.Email,
    loggedIn: data.LoggedIn,
    spotifyId: data.SpotifyID
  }
}

export function removeUser() {
  return {
    type: 'SET_USER',
    email: '',
    loggedIn: false,
    spotifyId: ''
  }
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export function fetchPlaylists() {
  return function (dispatch) {
    dispatch(requestPlaylists())
    const authCookie = cookie.load('auth-session')
    var options = {
      headers: {
        'Content-type': 'application/json',
      },
      params: {
        auth: 'auth-session=' + authCookie,
        endpoint: '/spotify/playlists',
      }
    };
    axios.get(`${serverAddress}/api/getData`, options)
      .then(function(body){
        dispatch(receivePlaylistsSuccess(body))
      })
      .catch(function(error){
        dispatch(receiveQueueError(error))
      })
  }
}

export function fetchQueue() {
  return function (dispatch) {
    dispatch(requestQueue())
    const authCookie = cookie.load('auth-session')
    var options = {
      headers: {
        'Content-type': 'application/json',
      },
      params: {
        auth: 'auth-session=' + authCookie,
        endpoint: '/queue/user',
      }
    };
    axios.get(`${serverAddress}/api/getData`, options)
      .then(function(body){
        dispatch(receiveQueueSuccess(body))
      })
      .catch(function(error){
        dispatch(receiveQueueError(error))
      })
  }
}

export function fetchGenres() {
  return function (dispatch) {
    dispatch(requestGenres())
    const authCookie = cookie.load('auth-session')
    var options = {
      headers: {
        'Content-type': 'application/json',
      },
      params: {
        auth: 'auth-session=' + authCookie,
        endpoint: '/genre/user',
      }
    };
    axios.get(`${serverAddress}/api/getData`, options)
      .then(function(body){
        console.log('no error: ', body)
        dispatch(receiveGenresSuccess(body))
      })
      .catch(function(error){
        console.log('error: ', error)
        dispatch(receiveGenresError(error))
      })
  }
}


export function tracksFromPlaylist(id) {
  return function (dispatch) {
    dispatch(requestTracksFromPlaylist())
    const authCookie = cookie.load('auth-session')
    var options = {
      headers: {
        'Content-type': 'application/json',
      },
      params: {
        auth: 'auth-session=' + authCookie,
        endpoint: `/playlist/${id}`,
      }
    };
    axios.get(`${serverAddress}/api/getData`, options)
      .then(function(response){
        dispatch(receiveTracksFromPlaylistSuccess(response))
        dispatch(saveQueue())
      })
      .catch(function(error){
        console.log('wtf', error)
        dispatch(receiveTracksFromPlaylistError(error))
      })
  }
}

export function saveTrack(genreId, track) {
  return function (dispatch) {
    dispatch(addToTracks(track))
    const authCookie = cookie.load('auth-session')
    let form = {};
    form.payload = JSON.stringify(track)
    form.auth = 'auth-session=' + authCookie,
    form.endpoint = `/genre/${genreId}/track/add`
    const data = querystring.stringify(form)
    axios.post(`${serverAddress}/api/postData`, data, {headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }})
      .then(function(body){
        dispatch(trackSaveSuccess(fromJS(body)))
      })
      .catch(function(error){
        dispatch(trackSaveError(fromJS(error.response.data)))
        dispatch(removeFromTracks(track))
      })
  }
}

export function saveQueue() {
  return function (dispatch, getState) {
    // dispatch(requestSaveQueue())
    console.log(getState())
    const queue = getState().core.get('queue').toJS()
    console.log('saving queue: ', queue)
    const authCookie = cookie.load('auth-session')
    let form = {};
    form.payload = JSON.stringify(queue)
    form.auth = 'auth-session=' + authCookie,
    form.endpoint = `/queue/save`
    const data = querystring.stringify(form)
    axios.post(`${serverAddress}/api/postData`, data, {headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }})
      .then(function(body){
        dispatch(queueSaveSuccess(fromJS(body)))
      })
      .catch(function(error){
        dispatch(queueSaveError(fromJS(error.response.data)))
      })
  }
}

export function removeTrack(genreId, track) {
  return function (dispatch) {
    dispatch(removeFromTracks(track))
    const authCookie = cookie.load('auth-session')
    let form = {};
    form.payload = JSON.stringify(track)
    form.auth = 'auth-session=' + authCookie,
    form.endpoint = `/genre/${genreId}/track/remove`
    const data = querystring.stringify(form)
    axios.post(`${serverAddress}/api/postData`, data, {headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }})
      .then(function(body){
        dispatch(trackSaveSuccess(fromJS(body)))
      })
      .catch(function(error){
        dispatch(trackSaveError(fromJS(error.response.data)))
        dispatch(addToTracks(track))
      })
  }
}

export function addTrackToGenre(genreId, track) {
  return function (dispatch) {
    dispatch(addToGenre('SeedTracks', track))
    const authCookie = cookie.load('auth-session')
    let form = {};
    form.payload = JSON.stringify(track)
    form.auth = 'auth-session=' + authCookie,
    form.endpoint = `/genre/${genreId}/seeds/track/add`
    const data = querystring.stringify(form)
    axios.post(`${serverAddress}/api/postData`, data, {headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }})
      .then(function(body){
        dispatch(trackSaveSuccess(fromJS(body)))
      })
      .catch(function(error){
        dispatch(trackSaveError(fromJS(error.response.data)))
        dispatch(removeFromGenre('SeedTracks', track))
      })
  }
}

export function addGenreToGenre(genreId, genre) {
  return function (dispatch) {
    dispatch(addToGenre('SeedGenres', genre))
    const authCookie = cookie.load('auth-session')
    let form = {};
    form.payload = genre
    form.auth = 'auth-session=' + authCookie,
    form.endpoint = `/genre/${genreId}/seeds/genre/add`
    const data = querystring.stringify(form)
    axios.post(`${serverAddress}/api/postData`, data, {headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }})
      .then(function(body){
        dispatch(trackSaveSuccess(fromJS(body)))
      })
      .catch(function(error){
        dispatch(trackSaveError(fromJS(error.response.data)))
        dispatch(removeFromGenre('SeedGenres', genre))
      })
  }
}

export function removeGenreFromGenre(genreId, genre) {
  return function (dispatch) {
    dispatch(removeFromGenre('SeedGenres', genre))
    const authCookie = cookie.load('auth-session')
    let form = {};
    form.payload = genre
    form.auth = 'auth-session=' + authCookie,
    form.endpoint = `/genre/${genreId}/seeds/genre/remove`
    const data = querystring.stringify(form)
    axios.post(`${serverAddress}/api/postData`, data, {headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }})
      .then(function(body){
        dispatch(trackSaveSuccess(fromJS(body)))
      })
      .catch(function(error){
        dispatch(trackSaveError(fromJS(error.response.data)))
        dispatch(addToGenre('SeedGenres', genre))
      })
  }
}

export function removeTrackFromGenre(genreId, track) {
  return function (dispatch) {
    dispatch(removeFromGenre('SeedTracks', track))
    const authCookie = cookie.load('auth-session')
    let form = {};
    form.payload = JSON.stringify(track)
    form.auth = 'auth-session=' + authCookie,
    form.endpoint = `/genre/${genreId}/seeds/track/remove`
    const data = querystring.stringify(form)
    axios.post(`${serverAddress}/api/postData`, data, {headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }})
      .then(function(body){
        dispatch(trackSaveSuccess(fromJS(body)))
      })
      .catch(function(error){
        dispatch(trackSaveError(fromJS(error.response.data)))
        dispatch(addToGenre('SeedTracks', track))
      })
  }
}

export function addArtistToGenre(genreId, artist) {
  return function (dispatch) {
    dispatch(addToGenre('SeedArtists', artist))
    const authCookie = cookie.load('auth-session')
    let form = {};
    form.payload = JSON.stringify(artist)
    form.auth = 'auth-session=' + authCookie,
    form.endpoint = `/genre/${genreId}/seeds/artist/add`
    const data = querystring.stringify(form)
    axios.post(`${serverAddress}/api/postData`, data, {headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }})
      .then(function(body){
        dispatch(trackSaveSuccess(fromJS(body)))
      })
      .catch(function(error){
        dispatch(trackSaveError(fromJS(error.response.data)))
        dispatch(removeFromGenre('SeedArtists', artist))
      })
  }
}

export function removeArtistFromGenre(genreId, artist) {
  return function (dispatch) {
    dispatch(removeFromGenre('SeedArtists', artist))
    const authCookie = cookie.load('auth-session')
    let form = {};
    form.payload = JSON.stringify(artist)
    form.auth = 'auth-session=' + authCookie,
    form.endpoint = `/genre/${genreId}/seeds/artist/remove`
    const data = querystring.stringify(form)
    axios.post(`${serverAddress}/api/postData`, data, {headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }})
      .then(function(body){
        dispatch(trackSaveSuccess(fromJS(body)))
      })
      .catch(function(error){
        dispatch(trackSaveError(fromJS(error.response.data)))
        dispatch(addToGenre('SeedArtists', artist))
      })
  }
}

export function discardTrackFromPlayerThunk(genreId, track) {
  return function (dispatch) {
    dispatch(discardTrackFromPlayer(track))
    const authCookie = cookie.load('auth-session')
    let form = {};
    form.payload = JSON.stringify(track)
    form.auth = 'auth-session=' + authCookie,
    form.endpoint = `/genre/${genreId}/listened`
    const data = querystring.stringify(form)
    axios.post(`${serverAddress}/api/postData`, data, {headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }})
  }
}

export function discardTrackFromQueueThunk(genreId, track, queue) {
  return function (dispatch) {
    dispatch(discardTrackFromQueue(track))
    dispatch(saveQueue())
    const authCookie = cookie.load('auth-session')
    let form = {};
    form.payload = JSON.stringify(track)
    form.auth = 'auth-session=' + authCookie,
    form.endpoint = `/genre/${genreId}/listened`
    const data = querystring.stringify(form)
    axios.post(`${serverAddress}/api/postData`, data, {headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }})
  }
}

export function createNewGenreThunk(name, description) {
  return function (dispatch) {
    dispatch(hideNewGenreForm())
    console.log('ready to post: ', name, description)
    const authCookie = cookie.load('auth-session')
    let form = {};
    form.payload = JSON.stringify({ name: name, description: description })
    form.auth = 'auth-session=' + authCookie,
    form.endpoint = `/genre/user/new`
    const data = querystring.stringify(form)
    axios.post(`${serverAddress}/api/postData`, data, {headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }})
    .then(function(){
      const thunk = fetchGenres();
      dispatch(thunk)
    })
  }
}

export function getRecommendedTracksThunk(tracks, artists, genres) {
  return function (dispatch) {
    dispatch(requestGetRecommendedTracks())
    const authCookie = cookie.load('auth-session')
    let form = {};
    form.payload = JSON.stringify({ tracks: _.map(tracks, 'SpotifyID'), artists: _.map(artists, 'id'), genres: genres })
    console.log(form.payload)
    form.auth = 'auth-session=' + authCookie,
    form.endpoint = `/recommended`
    const data = querystring.stringify(form)
    axios.post(`${serverAddress}/api/postData`, data, {headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }})
    .then(function(response){
      console.log(response);
      dispatch(getRecommendedTracksSuccess(response))
      dispatch(saveQueue())
    })
    .catch(function(error){
      console.log(error);
      dispatch(getRecommendedTracksError(error))
    })
  }
}

export function checkAuth() {
  return function (dispatch) {
    const authCookie = cookie.load('auth-session')
    let form = {};
    form.auth = 'auth-session=' + authCookie
    const data = querystring.stringify(form)
    axios.post(`${serverAddress}/api/checkAuth`, data, {headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }})
    .then(function(response){
      if (response.data.LoggedIn) {
        dispatch(setUser(response.data))
        dispatch(fetchUserData())
      } else {
        browserHistory.push('/login')
      }
    })
    .catch(function(error){
      browserHistory.push('/login')
    })
  }
}

export function fetchUserData() {
  return function (dispatch) {
    dispatch(fetchQueue())
    dispatch(fetchPlaylists())
    dispatch(fetchGenres())
  }
}
