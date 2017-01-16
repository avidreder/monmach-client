import { fromJS, Map } from 'immutable'
import * as _ from 'lodash'

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
  currentTrack.CustomGenres.push(genre)
  return fromJS(Object.assign({}, state.toJS(), {
    currentTrack
  }))
}

export function removeCustomGenre(state, genre){
  let currentTrack = state.get('currentTrack').toJS()
  currentTrack.CustomGenres = _.reject(currentTrack.CustomGenres, (o) => (
    _.some(currentTrack.CustomGenres, {'Name': genre.Name}))
  )
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
    Playlists: [],
    Created: '0001-01-01T00:00:00Z',
    Genres: ['cool genre'],
    CustomGenres: [],
    SpotifyTrack: {
      name: 'What You Wanted',
      id: '4OlUxUBwAvogyWVfsdKRkf',
      album: {
        images: [
          {
            height: 640,
            width: 640,
            url: 'https://i.scdn.co/image/778991b4d78f9028b82ba8f02945d8d92188aec2'
          },
          {
            height: 300,
            width: 300,
            url: 'https://i.scdn.co/image/500ee81f0fc53ff252c70f03d6cae982d4b927d8'
          },
          {
            height: 64,
            width: 64,
            url: 'https://i.scdn.co/image/48dee53dab89a9d1cf435c04715589f449bf1783'
          }
        ]
      },
      artists: [
        {
          name: 'Betablock3r',
          id: '1s5qarNhu9YkU9fFVSFcnk'
        }
      ]
    },
    SpotifyID: '4OlUxUBwAvogyWVfsdKRkf',
    Updated: '0001-01-01T00:00:00Z',
    ID: '',
    Features: {
      liveness: 0.102,
      mode: 1,
      time_signature: 4,
      energy: 0.859,
      loudness: -3.8,
      instrumentalness: 0.00485,
      uri: 'spotify:track:4OlUxUBwAvogyWVfsdKRkf',
      valence: 0.647,
      analysis_url: 'https://api.spotify.com/v1/audio-analysis/4OlUxUBwAvogyWVfsdKRkf',
      duration_ms: 213939,
      danceability: 0.779,
      acousticness: 0.00407,
      id: '4OlUxUBwAvogyWVfsdKRkf',
      tempo: 119.989,
      speechiness: 0.0314,
      track_href: 'https://api.spotify.com/v1/tracks/4OlUxUBwAvogyWVfsdKRkf',
      key: 2
    },
    Rating: 0
  },
  queue: {
    'ID': '586abdb166a62a280991a6d4',
    'UserID': '586abdb166a62a280991a6d3',
    'Name': '',
    'MaxSize': 0,
    'TrackQueue': [
      {
        Playlists: [],
        Created: '0001-01-01T00:00:00Z',
        Genres: ['some genre'],
        CustomGenres: [],
        SpotifyTrack: {
          name: 'What You Wanted',
          id: '4OlUxUBwAvogyWVfsdKRkf',
          album: {
            images: [
              {
                height: 640,
                width: 640,
                url: 'https://i.scdn.co/image/778991b4d78f9028b82ba8f02945d8d92188aec2'
              },
              {
                height: 300,
                width: 300,
                url: 'https://i.scdn.co/image/500ee81f0fc53ff252c70f03d6cae982d4b927d8'
              },
              {
                height: 64,
                width: 64,
                url: 'https://i.scdn.co/image/48dee53dab89a9d1cf435c04715589f449bf1783'
              }
            ]
          },
          artists: [
            {
              name: 'Betablock3r',
              id: '1s5qarNhu9YkU9fFVSFcnk'
            }
          ]
        },
        SpotifyID: '4OlUxUBwAvogyWVfsdKRkf',
        Updated: '0001-01-01T00:00:00Z',
        ID: '',
        Features: {
          liveness: 0.102,
          mode: 1,
          time_signature: 4,
          energy: 0.859,
          loudness: -3.8,
          instrumentalness: 0.00485,
          uri: 'spotify:track:4OlUxUBwAvogyWVfsdKRkf',
          valence: 0.647,
          analysis_url: 'https://api.spotify.com/v1/audio-analysis/4OlUxUBwAvogyWVfsdKRkf',
          duration_ms: 213939,
          danceability: 0.779,
          acousticness: 0.00407,
          id: '4OlUxUBwAvogyWVfsdKRkf',
          tempo: 119.989,
          speechiness: 0.0314,
          track_href: 'https://api.spotify.com/v1/tracks/4OlUxUBwAvogyWVfsdKRkf',
          key: 2
        },
        Rating: 0
      },
      {
        Playlists: [],
        Created: '0001-01-01T00:00:00Z',
        Genres: [],
        CustomGenres: [],
        SpotifyTrack: {
          name: 'I. Walk',
          id: '4yOhGLL7kBAiaAteFfluC8',
          album: {
            images: [
              {
                height: 640,
                width: 640,
                url: 'https://i.scdn.co/image/1c72dfb5beba7771320b17f8fc0e6245a05c054a'
              },
              {
                height: 300,
                width: 300,
                url: 'https://i.scdn.co/image/9fda984cb6d275d453697e74fbb69b0eed5cfd80'
              },
              {
                height: 64,
                width: 64,
                url: 'https://i.scdn.co/image/54efcee5c385913326bf68afadc07f62b2c94d65'
              }
            ]
          },
          artists: [
            {
              name: 'Owen Thiele x Zack Sekoff',
              id: '3HtzVA7P6FAoqOSfvdVYC4'
            }
          ]
        },
        SpotifyID: '4yOhGLL7kBAiaAteFfluC8',
        Updated: '0001-01-01T00:00:00Z',
        ID: '',
        Features: {
          liveness: 0.162,
          mode: 1,
          time_signature: 4,
          energy: 0.604,
          loudness: -8.157,
          instrumentalness: 0.00000644,
          uri: 'spotify:track:4yOhGLL7kBAiaAteFfluC8',
          valence: 0.861,
          analysis_url: 'https://api.spotify.com/v1/audio-analysis/4yOhGLL7kBAiaAteFfluC8',
          duration_ms: 217033,
          danceability: 0.769,
          acousticness: 0.0517,
          id: '4yOhGLL7kBAiaAteFfluC8',
          tempo: 123.97,
          speechiness: 0.042,
          track_href: 'https://api.spotify.com/v1/tracks/4yOhGLL7kBAiaAteFfluC8',
          key: 0
        },
        Rating: 0
      }
    ],
    'SeedArtists': [],
    'SeedTracks': [],
    'ListenedTracks': [],
    'Created': '0001-01-01T00:00:00Z',
    'Updated': '0001-01-01T00:00:00Z'
  },
  playlists: [
    {
      'collaborative': false,
      'external_urls': {
        'spotify': 'http://open.spotify.com/user/spotify/playlist/37i9dQZEVXcDZUvJ9OK3xY'
      },
      'href': 'https://api.spotify.com/v1/users/spotify/playlists/37i9dQZEVXcDZUvJ9OK3xY',
      'id': '37i9dQZEVXcDZUvJ9OK3xY',
      'images': [
        {
          'height': 0,
          'width': 0,
          'url': 'https://u.scdn.co/images/pl/default/0b868e7974bc7f99aafb8ef23a3eb2dba401c3dd'
        }
      ],
      'name': 'Discover Weekly',
      'owner': {
        'display_name': '',
        'external_urls': {
          'spotify': 'http://open.spotify.com/user/spotify'
        },
        'followers': {
          'total': 0,
          'href': ''
        },
        'href': 'https://api.spotify.com/v1/users/spotify',
        'id': 'spotify',
        'images': [],
        'uri': 'spotify:user:spotify'
      },
      'public': false,
      'snapshot_id': 'tLE6sfOkzYniN6WXWsV2+XO9JUFhkLpESMAe9joX8dWkIOiZq8+Lo+14P7/yuo5aNdaY6iHEEns=',
      'tracks': {
        'href': 'https://api.spotify.com/v1/users/spotify/playlists/37i9dQZEVXcDZUvJ9OK3xY/tracks',
        'total': 30
      },
      'uri': 'spotify:user:spotify:playlist:37i9dQZEVXcDZUvJ9OK3xY'
    },
  ],
  spotifyGenres: ['cool music'],
  genres: [
    {
      ID: '1',
      UserID: '586abdb166a62a280991a6d3',
      QueueID: 1,
      Name: 'RnB',
      Description: 'Downtempo rap and rnb',
      SeedArtists: [],
      SeedTracks:[],
      SeedPlaylists:[],
      AvatarURL: '',
      Created:0,
      Updated:0,
      TrackBlacklist: [],
      TrackWhitelist: []
    },
    {
      ID: '2',
      UserID: '586abdb166a62a280991a6d3',
      QueueID: 1,
      Name: 'Coding Music',
      Description: 'Ambient Electronica for focused work',
      SeedArtists: [],
      SeedTracks:[],
      SeedPlaylists:[],
      AvatarURL: '',
      Created:0,
      Updated:0,
      TrackBlacklist: [],
      TrackWhitelist: []
    },
    {
      ID: '3',
      UserID: '586abdb166a62a280991a6d3',
      QueueID: 1,
      Name: 'Rock',
      Description: 'Guitar based music',
      SeedArtists: [],
      SeedTracks:[],
      SeedPlaylists:[],
      AvatarURL: '',
      Created:0,
      Updated:0,
      TrackBlacklist: [],
      TrackWhitelist: []
    },
  ]
})
