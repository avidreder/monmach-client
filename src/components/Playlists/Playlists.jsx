import React from 'react'
import PlaylistItem from 'components/PlaylistItem'
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import { connect } from 'react-redux'
import * as actionCreators from 'store/coreActionCreators'

const styles = {
  overflowY: 'auto'
}

export const Playlists = (props) => {
  return(
    <Card>
      <CardTitle title="Get tracks from playlist" subtitle="Select a playlist to place tracks in queue" />
      <CardText style={ styles } >
        {props.playlists.map(playlist =>
          <PlaylistItem key={playlist.id}
            tracksFromPlaylist={ props.tracksFromPlaylist }
            playlist={playlist} />
        )}
      </CardText>
    </Card>
  )
}
Playlists.propTypes = {
  playlists: React.PropTypes.array,
  tracksFromPlaylist: React.PropTypes.func,
}

export default Playlists
