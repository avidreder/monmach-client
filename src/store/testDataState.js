import { fromJS } from 'immutable'

const testState = fromJS({
  newGenreFormOpen: false,
  populateQueueDialogOpen: false,
  recommendationSeeds: {
    artists: [],
    genres: [],
    tracks: [],
  },
  data: {
    playlists: {
      loading: false,
    },
    queue: {
      loading: false,
    },
    genres: {
      loading: false,
    },
    tracks: {
      loading: false,
    },
  },
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
      SeedGenres:[],
      AvatarURL: '',
      Created:0,
      Updated:0,
      ListenedTracks: []
    },
    {
      ID: '58977d2efe10074d384efa49',
      UserID: '586abdb166a62a280991a6d3',
      QueueID: 1,
      Name: 'Coding Music',
      Description: 'Ambient Electronica for focused work',
      SeedArtists: [],
      SeedTracks:[],
      SeedGenres:[],
      AvatarURL: '',
      Created:0,
      Updated:0,
      ListenedTracks: []
    },
    {
      ID: '3',
      UserID: '586abdb166a62a280991a6d3',
      QueueID: 1,
      Name: 'Rock',
      Description: 'Guitar based music',
      SeedArtists: [],
      SeedTracks:[],
      SeedGenres:[],
      AvatarURL: '',
      Created:0,
      Updated:0,
      ListenedTracks: []
    },
  ],
  currentCustomGenre: {
    ID: '58977d2efe10074d384efa49',
    UserID: '586abdb166a62a280991a6d3',
    QueueID: 1,
    Name: 'Coding Music',
    Description: 'Ambient Electronica for focused work',
    TrackList: [],
    SeedArtists: [],
    SeedTracks:[],
    SeedGenres:[],
    AvatarURL: '',
    Created:0,
    Updated:0,
    ListenedTracks: []
  }
})

export default testState
