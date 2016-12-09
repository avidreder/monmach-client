import { fromJS, Map } from 'immutable'
import * as _ from 'lodash'

// ------------------------------------
// Reducer
// ------------------------------------

export const SET_TEST_DATA = 'SET_TEST_DATA'

export default function coreReducer (state = testState, action) {
  switch (action.type) {
    case 'SET_CURRENT_TRACK':
      return fromJS(Object.assign({}, state.toJS(), {
        currentTrack: action.track
      }))
    case 'REMOVE_FROM_QUEUE':
      queue = state.get('queue').toJS()
      queue.TrackQueue = _.reject(queue.TrackQueue, {ID: action.track.ID})
      return fromJS(Object.assign({}, state.toJS(), {
        queue: queue
      }))
    // case 'ADD_TO_LISTENED':
    //   return Object.assign({}, state, {
    //     queue: queue = state.queue.ListenedTracks.push(action.track.ID)
    //   })
    // case 'ADD_GENRE':
    //   return Object.assign({}, state, {
    //     action.track.Genres.push(state.genre.ID)
    //     currentTrack: action.track
    //   })
// case 'REQUEST_SHOWS':
//   return requestShows(state);
// case 'RECEIVE_SHOWS_SUCCESS':
//   return receiveShowsSuccess(state, action.shows);
// case 'RECEIVE_SHOWS_ERROR':
//   return receiveShowsError(state, action.error
// );
    case 'SET_STATE':
      return state.merge(action.state);
    default:
      if (!Map.isMap(state)) {
        state = state.fromJS()
      }
      return state
    }
}
function addToListened(state, track) {
    var queue = state.get('queue');
    queue.set('ListenedTracks', queue.get('ListenedTracks').push(track.ID));
    return state.set('queue', queue);
}

function addGenre(state, track) {
    track.Genres.push(state.get('genre').get('ID'))
    return state.set('currentTrack', fromJS(track));
}

const testState = fromJS({
  currentTrack: {
    ID: 1,
    Name: 'Wish You Were Here',
    Artists: ['Pink Floyd'],
    ImageURL: 'https://i.scdn.co/image/aab31a87e274822dd11c1de4b6e851aa3a471500',
    SpotifyID: '6mFkJmJqdDVQ1REhVfGgd1',
    Genres: [],
    Playlists: [1],
    Rating: 0,
    Created: 0,
    Updated: 0,
    Features: [0.481, 0.262, 7, -15.730, 1, 0.0414, 0.735, 0.0114, 0.832, 0.358, 122.883, 334744, 4]
  },
  queue: {
    ID: 1,
    UserID: 1,
    Name: 'TestQueue',
    MaxSize: 10,
    TrackQueue:[
      {
        ID: 1,
        Name: 'Wish You Were Here',
        Artists: ['Pink Floyd'],
        ImageURL: 'https://i.scdn.co/image/aab31a87e274822dd11c1de4b6e851aa3a471500',
        SpotifyID: '6mFkJmJqdDVQ1REhVfGgd1',
        Genres: [],
        Playlists: [1],
        Rating: 0,
        Created: 0,
        Updated: 0,
        Features: [0.481, 0.262, 7, -15.730, 1, 0.0414, 0.735, 0.0114, 0.832, 0.358, 122.883, 334744, 4]
      },
      {
        ID: 2,
        Name: 'The Trooper - 1998 Remastered Version',
        Artists: ['Iron Maiden'],
        ImageURL: 'https://i.scdn.co/image/61db744786108eb24f8d54f6e9eaf3eb3331feea',
        SpotifyID: '3MXA2BkBk0lSuMpRoM7SK2',
        Genres: [1],
        Playlists: [1],
        Rating: 0,
        Created: 0,
        Updated: 0,
        Features: [0.288, 0.864, 4, -6.762, 0, 0.0673, 0.0172, 0.0567, 0.541, 0.640, 162.233, 250947, 4]
      },
      {
        ID: 3,
        Name: 'Landslide',
        Artists: ['The Smashing Pumpkins'],
        ImageURL: 'https://i.scdn.co/image/0fc777e6f5f813d3de6dc1cbeef322f0edd09619',
        SpotifyID: '2dc1BYopTHgviDXawShfME',
        Genres: [1],
        Playlists: [1],
        Rating: 0,
        Created: 0,
        Updated: 0,
        Features: [0.422, 0.208, 10, -15.886, 1, 0.0318, 0.896, 0.0265, 0.192, 0.377, 111.546, 190587, 3]
      }
    ],
    SeedArtists: [],
    SeedTracks:[],
    ListenedTracks:[],
    Created:0,
    Updated:0
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
