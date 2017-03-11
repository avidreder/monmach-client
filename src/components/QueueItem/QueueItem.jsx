import React from 'react'
import FontIcon from 'material-ui/FontIcon'
import Paper from 'material-ui/Paper'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'
import { Card, CardTitle, CardText, CardHeader } from 'material-ui/Card'

export const QueueItem = (props) => (

    <Card>
      <CardTitle>
        <Toolbar>
          <ToolbarGroup>
            <ToolbarTitle text={props.track.SpotifyTrack.name} />
          </ToolbarGroup>
          <ToolbarGroup>
            <FontIcon className='material-icons'
              onClick={() => props.setTrack(props.track)}>
              play_circle_outline
            </FontIcon>
            <FontIcon className='material-icons'
              onClick={() => props.discardTrackFromQueue(props.track)}>
              not_interested</FontIcon>
          </ToolbarGroup>
        </Toolbar>
        { props.track.SpotifyTrack.artists.map((artist) => (
          <Card key={ artist.id }>
            <CardTitle subtitle={ artist.name } />
          </Card>
        ))}
      </CardTitle>
    </Card>
)

QueueItem.propTypes = {
  track: React.PropTypes.object,
  setTrack: React.PropTypes.func,
  discardTrackFromQueue: React.PropTypes.func,
  addGenre: React.PropTypes.func,
}

export default QueueItem
