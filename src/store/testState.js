import { fromJS } from 'immutable'

const testState = fromJS({
  currentUser: {
    email: '',
    loggedIn: '',
    spotifyId: '',
  },
  customGenreGenreList: [],
  customGenreArtistList: [],
  currentQueueArtistList: [],
  newGenreFormOpen: false,
  genreFilterDialogOpen: false,
  newTrackFilterDialogOpen: false,
  populateQueueDialogOpen: false,
  genreTrackFilters: {
    rating: 3,
    genres: [],
    active: [],
    artists: [],
  },
  newTrackFilters: {
    genres: [],
    active: [],
    artists: [],
  },
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
  currentTrack: {},
  queue: {},
  playlists: [],
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
  currentCustomGenre: {}
})

export default testState
