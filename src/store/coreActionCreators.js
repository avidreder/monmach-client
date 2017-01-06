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

// export function sendMultiple(shows, dispatch) {
//   dispatch(receiveShowsSuccess(shows));
//   dispatch(updateVenueList(shows));
//   dispatch(updateDateList(shows));
// }

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

// export function fetchQueue() {
//   return function (dispatch) {
//
//     dispatch(requestQueue())
//
//     return fetch('http://localhost:3000/queue', {
//         method: 'get',
//         credentials: 'include',
//         headers: {
//             "Content-type": "application/json",
//             "Cookie": "auth-session=MTQ4MzQ2MTg2MXxOd3dBTkZOUVVVbzBOMUpIV2s4M1RWQk1WVFJQTWtoQ1IwdFFUVFZaUnpSS1IwdFlRMHRGVTFwWFFVeFBTVFZLVkVORVNrRktUVkU9fI1AkY4MSStYJy3bEtDd06IHAb7bYwgh1t71L5FDPz8K"
//         },
//       })
//       .then(handleErrors)
//       .then(function(response){
//         console.log(response);
//         return response.json();
//       })
//       .then(function(json){
//         dispatch(receiveQueueSuccess(json));
//       }).catch(function(error){
//         console.log(error);
//         dispatch(receiveShowsError(error));
//       })
//   }
// }
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
