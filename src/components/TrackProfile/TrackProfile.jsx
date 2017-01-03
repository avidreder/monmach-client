import React from 'react'
import { Card, CardHeader, CardMedia, CardText } from 'material-ui/Card'
import Paper from 'material-ui/Paper'
import TrackVisualization from 'components/TrackVisualization'

export const TrackProfile = (props) => (
  <div>
    <Card>
      <CardHeader title='Song profile' />
      <CardMedia>
        <TrackVisualization />
      </CardMedia>
      <CardText>
        <Paper size={100}>
          Song BPM: 100
        </Paper>
      </CardText>
    </Card>
  </div>
)

// Song BPM: {Math.floor(props.track.Features[10])}

TrackProfile.propTypes = {
  track: React.PropTypes.object
}

export default TrackProfile
