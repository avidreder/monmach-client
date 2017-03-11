import React from 'react'
import FontIcon from 'material-ui/FontIcon'
import Paper from 'material-ui/Paper'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'
import { Card, CardTitle, CardText, CardHeader, CardActions } from 'material-ui/Card'

export const QueueItem = (props) => {
  const artistString = props.track.SpotifyTrack.artists.map((artist) => artist.name).join(', ')
  const genreString = props.track.Genres.join(', ')
  const genreStyles = {
    paddingTop: '0px',
    paddingRight: '16px',
    paddingBottom: '0px',
    paddingLeft: '16px'
  }
  const queueActions = (<div style={ {float:'right'} }><FontIcon className='material-icons'
    onClick={() => props.setTrack(props.track)}>
    play_circle_outline
  </FontIcon>
  <FontIcon className='material-icons'
    onClick={() => props.discardTrackFromQueue(props.track)}>
    not_interested</FontIcon></div>)
  return (
    <Card>
      <CardHeader title={ props.track.SpotifyTrack.name }
        subtitle={ artistString }>
        { queueActions }
      </CardHeader>
      <CardText style={ genreStyles }>{ genreString }</CardText>
    </Card>
  )
}

QueueItem.propTypes = {
  track: React.PropTypes.object,
  setTrack: React.PropTypes.func,
  discardTrackFromQueue: React.PropTypes.func,
  addGenre: React.PropTypes.func,
}

export default QueueItem
