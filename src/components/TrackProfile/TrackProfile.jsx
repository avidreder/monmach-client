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
          <ul>
          { Object.keys(props.track.Features).map((key) => {
            return ['key','mode','time_signature','duration_ms','tempo'].indexOf(key) > -1 &&
            <li key={ key }>{ key.toString().charAt(0).toUpperCase() + key.toString().slice(1) }: {props.track.Features[key]}</li>
          })}
        </ul>
        </Paper>
        <Paper size={100}>
          <ul>
          { Object.keys(props.track.Features).map((key) => {
            return ['id','uri','track_href','analysis_url','key','mode','time_signature','duration_ms','tempo'].indexOf(key) === -1 &&
            <li key={ key }>{ key.toString().charAt(0).toUpperCase() + key.toString().slice(1) }: {props.track.Features[key]}</li>
          })}
        </ul>
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
