import { fromJS, Map } from 'immutable'
import * as _ from 'lodash'

// ------------------------------------
// Reducer
// ------------------------------------

export const SET_TEST_DATA = 'SET_TEST_DATA'

export function setTrack(state, track){
  return fromJS(Object.assign({}, state.toJS(), {
    currentTrack: {
      track: track
    }
  }))
}

export function removeFromQueue(state, track){
  queue = state.get('queue').toJS()
  queue.TrackQueue = _.reject(queue.TrackQueue, {ID: track.ID})
  return fromJS(Object.assign({}, state.toJS(), {
    queue: queue
  }))
}

export function addToListened(state, track){
  let queue = state.get('queue').toJS()
  console.log(queue)
  queue.ListenedTracks.push(track.ID)
  return fromJS(Object.assign({}, state.toJS(), {
    queue: queue
  }))
}

export function addToGenre(state, track) {
  console.log(track)
  const genre = state.get('genre').toJS()
  track.Genres.push(genre.ID)
  console.log(track)
  return fromJS(Object.assign({}, state.toJS(), {
    currentTrack: track
  }))
}

export function receiveQueueSuccess(state, queue) {
  console.log("queue: ", queue)
  return fromJS(Object.assign({}, state.toJS(), {
    queue: queue
  }))
}

export function receiveQueueError(state, error) {
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
    case 'ADD_GENRE':
      return addToGenre(state, action.track)
    case 'REQUEST_QUEUE':
      return state;
    case 'RECEIVE_QUEUE_SUCCESS':
      return receiveQueueSuccess(state, action.queue);
    case 'RECEIVE_QUEUE_ERROR':
      return receiveQueueError(state, action.error
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

const testState = fromJS({
  currentTrack: {
    "track": {
      "name": "Do You Think About Me",
      "id": "389mjNKJ6oLactAPNaZplR",
      "album": {
        "images": [
          {
            "height": 640,
            "width": 640,
            "url": "https://i.scdn.co/image/7ecff592e06f173b30f5fdf6e0a31c39663f641b"
          },
          {
            "height": 300,
            "width": 300,
            "url": "https://i.scdn.co/image/0ea68ef9acec33071a0028b6799e2d31be0b8c97"
          },
          {
            "height": 64,
            "width": 64,
            "url": "https://i.scdn.co/image/2a3c53fb0402b7fdf8236913cfc9d04b8551d522"
          }
        ]
      },
      "artists": [
        {
          "name": "SMSHNG HRTS",
          "id": "6qVFWwbNA5OPHpVpkrDqfY"
        }
      ],
    }
  },
  queue: {
    "ID": "586abdb166a62a280991a6d4",
    "UserID": "586abdb166a62a280991a6d3",
    "Name": "",
    "MaxSize": 0,
    "TrackQueue": [
      {
        "track": {
          "name": "Do You Think About Me",
          "id": "389mjNKJ6oLactAPNaZplR",
          "album": {
            "images": [
              {
                "height": 640,
                "width": 640,
                "url": "https://i.scdn.co/image/7ecff592e06f173b30f5fdf6e0a31c39663f641b"
              },
              {
                "height": 300,
                "width": 300,
                "url": "https://i.scdn.co/image/0ea68ef9acec33071a0028b6799e2d31be0b8c97"
              },
              {
                "height": 64,
                "width": 64,
                "url": "https://i.scdn.co/image/2a3c53fb0402b7fdf8236913cfc9d04b8551d522"
              }
            ]
          },
          "artists": [
            {
              "name": "SMSHNG HRTS",
              "id": "6qVFWwbNA5OPHpVpkrDqfY"
            }
          ],
        }
      },
      {
        "track": {
          "name": "Reforget (Milk N Cooks Remix)",
          "id": "7mLyWGOqr7OHxg17Zkg5rc",
          "album": {
            "images": [
              {
                "height": 640,
                "width": 640,
                "url": "https://i.scdn.co/image/389f5a5a86348a594b427a332922f5d252123bae"
              },
              {
                "height": 300,
                "width": 300,
                "url": "https://i.scdn.co/image/081fbb64999085016fc1f8efb3ec2844a9db1610"
              },
              {
                "height": 64,
                "width": 64,
                "url": "https://i.scdn.co/image/7f0a9d57df6bf5bd92378f1829532f3997f12d55"
              }
            ]
          },
          "artists": [
            {
              "name": "Lauv",
              "id": "5JZ7CnR6gTvEMKX4g70Amv"
            },
            {
              "name": "Milk N Cooks",
              "id": "1FMPHgOCUsUhtNBZMDwdhD"
            }
          ]
        }
      }
    ],
    "SeedArtists": null,
    "SeedTracks": null,
    "ListenedTracks": null,
    "Created": "0001-01-01T00:00:00Z",
    "Updated": "0001-01-01T00:00:00Z"
  },
  playlist: {
    ID: 1,
    Name: 'TestQueue',
    UserID: 1,
    SpotifyID: '',
    Tracks:[],
    ListenedTracks:[],
    Created:0,
    Updated:0
  },
  genre: {
    ID: 1,
    UserID: 1,
    QueueID: 1,
    Name: 'Great Music',
    Description: 'My favorite songs',
    SeedArtists: [],
    SeedTracks:[],
    SeedPlaylists:[],
    AvatarURL: '',
    Created:0,
    Updated:0,
    TrackBlacklist: [],
    TrackWhitelist: []
  }
})
