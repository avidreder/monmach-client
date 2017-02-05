import React from 'react'
import PlaylistItem from 'components/PlaylistItem'
import { connect } from 'react-redux'
import * as actionCreators from 'store/coreActionCreators'



export const Playlists = (props) => {
  return(
    <div>
      {props.playlists.map(playlist =>
        <PlaylistItem key={playlist.id}
          tracksFromPlaylist={ props.tracksFromPlaylist }
          playlist={playlist} />
      )}
    </div>
  )
}
Playlists.propTypes = {
  playlists: React.PropTypes.array,
  tracksFromPlaylist: React.PropTypes.func,
}

export default Playlists
