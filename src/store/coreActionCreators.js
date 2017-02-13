var request = require('request')
var axios = require('axios')
const querystring = require('querystring')

request = request.defaults({jar: true})
import _ from 'lodash';
import { fromJS } from 'immutable'
import cookie from 'react-cookie';

// export function openModal(modalType) {
//   return {
//     type: 'OPEN_MODAL',
//     modalType
//   };
// }

// export function closeModal(modalType) {
//   return {
//     type: 'CLOSE_MODAL',
//     modalType
//   };
// }

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

export function receiveTracksFromPlaylistError(error) {
  return {
    type: 'RECEIVE_TRACKS_FROM_PLAYLIST_ERROR',
    error: error
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
    axios.get(`${config.browser_client_path}/api/getData`, options)
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
    axios.get(`${config.browser_client_path}/api/getData`, options)
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
    axios.get(`${config.browser_client_path}/api/getData`, options)
      .then(function(body){
        dispatch(receiveGenresSuccess(body))
      })
      .catch(function(error){
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
    axios.get(`${config.browser_client_path}/api/getData`, options)
      .then(function(response){
        dispatch(receiveTracksFromPlaylistSuccess(response))
      })
      .catch(function(error){
        dispatch(receiveTracksFromPlaylistError(error))
      })
  }
}

export function addTrackToGenre(genreId, track) {
  return function (dispatch) {
    dispatch(requestTrackSave(track))
    const authCookie = cookie.load('auth-session')
    let form = {};
    form.payload = JSON.stringify(track)
    form.auth = 'auth-session=' + authCookie,
    form.endpoint = `/genre/${genreId}/seed`
    const data = querystring.stringify(form)
    axios.post(`${config.browser_client_path}/api/postData`, data, {headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }})
      .then(function(body){
        dispatch(trackSaveSuccess(fromJS(body)))
      })
      .catch(function(error){
        dispatch(trackSaveError(fromJS(error.response.data)))
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
    axios.post(`${config.browser_client_path}/api/postData`, data, {headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }})
  }
}

export function discardTrackFromQueueThunk(genreId, track) {
  return function (dispatch) {
    dispatch(discardTrackFromQueue(track))
    const authCookie = cookie.load('auth-session')
    let form = {};
    form.payload = JSON.stringify(track)
    form.auth = 'auth-session=' + authCookie,
    form.endpoint = `/genre/${genreId}/listened`
    const data = querystring.stringify(form)
    axios.post(`${config.browser_client_path}/api/postData`, data, {headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }})
  }
}

export function createNewGenreThunk(name, description) {
  return function (dispatch) {
    dispatch(hideNewGenreForm())
    console.log('ready to post: ', name, description)
    // const authCookie = cookie.load('auth-session')
    // let form = {};
    // form.payload = JSON.stringify({ name: name, description: description })
    // form.auth = 'auth-session=' + authCookie,
    // form.endpoint = `/genre/user/new`
    // const data = querystring.stringify(form)
    // axios.post(`${config.browser_client_path}/api/postData`, data, {headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded',
    // }})
  }
}
