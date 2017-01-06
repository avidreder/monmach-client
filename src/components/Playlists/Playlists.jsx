import React from 'react'
import PlaylistItem from 'components/PlaylistItem'
import { connect } from 'react-redux'

export const Playlists = (props) => (
  <div>
    {props.playlists.map(playlist =>
      <PlaylistItem key={playlist.id}
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

export const PlaylistsContainer = connect(mapStateToProps)(Playlists)

export default PlaylistsContainer
