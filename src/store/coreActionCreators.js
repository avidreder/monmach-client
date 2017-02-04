var request = require('request')
var axios = require('axios')

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

export function discardTrack(track) {
  return {
    type: 'DISCARD_TRACK',
    track
  };
}

export function requestQueue() {
  return {
    type: 'REQUEST_QUEUE'
  }
}

export function receiveQueueSuccess(queue) {
  return {
    type: 'RECEIVE_QUEUE_SUCCESS',
    queue: queue
  }
}

export function receiveQueueError(error) {
  return {
    type: 'RECEIVE_QUEUE_ERROR',
    error: error
  }
}

export function requestPlaylists() {
  return {
    type: 'REQUEST_PLAYLISTS'
  }
}

export function receivePlaylistsSuccess(playlists) {
  return {
    type: 'RECEIVE_PLAYLISTS_SUCCESS',
    playlists: playlists
  }
}

export function receivePlaylistsError(error) {
  return {
    type: 'RECEIVE_PLAYLISTS_ERROR',
    error: error
  }
}

export function requestPlaylistToQueue() {
  return {
    type: 'REQUEST_PLAYLIST_TO_QUEUE'
  }
}

export function receivePlaylistToQueueSuccess(queue) {
  return {
    type: 'RECEIVE_PLAYLIST_TO_QUEUE_SUCCESS',
    queue: queue
  }
}

export function receivePlaylistToQueueError(error) {
  return {
    type: 'RECEIVE_PLAYLIST_TO_QUEUE_ERROR',
    error: error
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
    axios.get(`${config.browser_client_path}/api/data`, options)
      .then(function(body){
        console.log(body)
        dispatch(receivePlaylistsSuccess(fromJS(body.data.items)))
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
    axios.get(`${config.browser_client_path}/api/data`, options)
      .then(function(body){
        dispatch(receiveQueueSuccess(fromJS(body.data)))
      })
      .catch(function(error){
        dispatch(receiveQueueError(fromJS(error)))
      })
  }
}

export function playlistToQueue(id) {
  return function (dispatch) {
    dispatch(requestPlaylistToQueue())
    const authCookie = cookie.load('auth-session')
    var options = {
      headers: {
        'Content-type': 'application/json',
      },
      params: {
        auth: 'auth-session=' + authCookie,
        endpoint: `/queue/${id}`,
      }
    };
    axios.get(`${config.browser_client_path}/api/data`, options)
      .then(function(body){
        console.log(body.data)
        dispatch(receivePlaylistToQueueSuccess(fromJS(body.data)))
      })
      .catch(function(error){
        dispatch(receivePlaylistsError(fromJS(error)))
      })
  }
}

export function saveTrack(track) {
  return function (dispatch) {
    dispatch(requestTrackSave(track))
    const authCookie = cookie.load('auth-session')
    return new Promise(function(resolve, reject) {
      console.log(track);
      let form = {};
      form.Created = track.Created
      form.Updated = track.Updated
      form.CustomGenres = JSON.stringify(track.CustomGenres)
      form.Features = JSON.stringify(track.Features)
      form.Genres = JSON.stringify(track.Genres)
      form.Playlists = JSON.stringify(track.Playlists)
      form.SpotifyTrack = JSON.stringify(track.SpotifyTrack)
      form.SpotifyID = track.SpotifyID
      form.Rating = track.Rating
      const options = {
        url: 'http://localhost:3000/crud/tracks/new',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
          'Cookie': 'auth-session=' + authCookie
        },
        method: 'POST',
        form: form,
      }
      request(options, function(error, response, body) {
        if (error) return reject(error)
        resolve(body)
      })
    }).then(function(body){
      console.log(body)
      let result = {}
      try {
        result = JSON.parse(body)
      } catch (e) {
        result = { error: body }
      } finally {
        dispatch(trackSaveSuccess(fromJS(result)))
      }
    }).catch(function(error){
      dispatch(trackSaveError(error))
    })
  }
}
