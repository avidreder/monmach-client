import React from 'react'
import { Row, Col } from 'react-flexbox-grid/lib'
import { Card, CardHeader, CardMedia, CardText, CardTitle } from 'material-ui/Card'
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import Paper from 'material-ui/Paper'
import TrackVisualization from 'components/TrackVisualization'

export const TrackProfile = (props) => (
  <div>
    <Row>
      <Col md={12} sm={12} lg={12} xs={12}>
        <Card>
          <CardText>
            <ResponsiveContainer aspect={ 1 }>
              <RadarChart outerRadius="95%" data={props.chartData}>
                <Radar name="Features" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <PolarGrid />
                <PolarAngleAxis orientation="inner" dataKey="feature" />
                <PolarRadiusAxis angle={30} domain={[0, 1]} />
              </RadarChart>
            </ResponsiveContainer>
          </CardText>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md={12} sm={12} lg={12} xs={12}>
        <Card>
          <CardText>
            <Row>
              { Object.keys(props.track.Features).map((key) => {
                return ['key','mode','time_signature','duration_ms','tempo','loudness'].indexOf(key) > -1 &&
                <Col key={ key } md={4} sm={4} lg={4} xs={4}>
                  <Card>
                    <CardTitle subtitle={ key.toString().charAt(0).toUpperCase() + key.toString().slice(1) } />
                    <CardText>
                      {props.track.Features[key]}
                    </CardText>
                  </Card>
                </Col>
              })}
            </Row>
          </CardText>
        </Card>
      </Col>
    </Row>
  </div>
)

// Song BPM: {Math.floor(props.track.Features[10])}

TrackProfile.propTypes = {
  track: React.PropTypes.object,
  chartData: React.PropTypes.array,
}

export default TrackProfile
