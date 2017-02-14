import React from 'react'
import { Card, CardHeader, CardMedia, CardText } from 'material-ui/Card'
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
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
            return ['key','mode','time_signature','duration_ms','tempo','loudness'].indexOf(key) > -1 &&
            <li key={ key }>{ key.toString().charAt(0).toUpperCase() + key.toString().slice(1) }: {props.track.Features[key]}</li>
          })}
        </ul>
        </Paper>
        <Paper size={200}>
          <RadarChart outerRadius={150} width={730} height={250} data={props.chartData}>
            <Radar name="Features" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <PolarGrid />
            <PolarAngleAxis dataKey="feature" />
            <PolarRadiusAxis angle={30} domain={[0, 1]} />
          </RadarChart>
        </Paper>
      </CardText>
    </Card>
  </div>
)

// Song BPM: {Math.floor(props.track.Features[10])}

TrackProfile.propTypes = {
  track: React.PropTypes.object,
  chartData: React.PropTypes.array,
}

export default TrackProfile
