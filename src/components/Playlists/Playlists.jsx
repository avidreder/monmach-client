import React from 'react'
import PlaylistItem from 'components/PlaylistItem'
import { connect } from 'react-redux'
import * as actionCreators from 'store/coreActionCreators'

export const Playlists = (props) => (
  <div>
    {props.playlists.map(playlist =>
      <PlaylistItem key={playlist.id}
        playlistToQueue={ props.playlistToQueue }
        playlist={playlist} />
    )}
  </div>
)

Playlists.propTypes = {
  playlists: React.PropTypes.array,
}

const mapStateToProps = (state) => {
  return {
    playlists: state.core.get('playlists').toJS()
  }
}

const mapDispatchToProps = (dispatch) => ({
  playlistToQueue: (playlist) => {
    dispatch(actionCreators.playlistToQueue(playlist.id))
  }
})

export const PlaylistsContainer = connect(mapStateToProps, mapDispatchToProps)(Playlists)

export default PlaylistsContainer
