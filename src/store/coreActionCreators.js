var request = require('request')
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

export function removeFromQueue(track) {
  return {
    type: 'REMOVE_FROM_QUEUE',
    track
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

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export function fetchPlaylists() {
  return function (dispatch) {
    dispatch(requestPlaylists())
    const authCookie = cookie.load("auth-session")
    return new Promise(function(resolve, reject) {
      var options = {
        url: 'http://localhost:3000/spotify/playlists',
        headers: {
          "Content-type": "application/json",
          "Cookie": "auth-session=" + authCookie
        }
      };
      request(options, function(error, response, body) {
        if (error) return reject(error)
        resolve(body)
      })
    }).then(function(body){
      dispatch(receivePlaylistsSuccess(fromJS(JSON.parse(body).items)))
    }).catch(function(error){
      dispatch(receivePlaylistsError(error))
    })
  }
}

export function fetchQueue() {
  return function (dispatch) {
    dispatch(requestQueue())
    const authCookie = cookie.load("auth-session")
    return new Promise(function(resolve, reject) {
      var options = {
        url: 'http://localhost:3000/queue/user',
        headers: {
          "Content-type": "application/json",
          "Cookie": "auth-session=" + authCookie
        }
      };
      request(options, function(error, response, body) {
        if (error) return reject(error)
        resolve(body)
      })
    }).then(function(body){
      dispatch(receiveQueueSuccess(fromJS(JSON.parse(body))))
    }).catch(function(error){
      dispatch(receiveQueueError(error))
    })
  }
}
