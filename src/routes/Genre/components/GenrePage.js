import React from 'react'
import QueueContainer from 'components/Queue'
import TrackProfile from 'components/TrackProfile'
import TrackGenres from 'components/TrackGenres'
import TrackPlaylists from 'components/TrackPlaylists'
import TrackPlayer from 'components/TrackPlayer'
import { Card, CardTitle, CardText } from 'material-ui/Card'
import { Grid, Row, Col } from 'react-flexbox-grid/lib'
import './GenrePage.scss'

const genreName = 'testGenre'

export const GenrePage = (props) => (
  <div>
    <Grid fluid>
      <Row>
        <Col md={12} sm={12} lg={12}>
          <h1>{ genreName }</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6} sm={6} lg={6}>
          <Card>
            <CardTitle title='Currently Playing' />
            <CardText>
              <Row>
                <Col md={12} sm={12} lg={12}>
                  <TrackPlayer track={props.currentTrack.track} addGenre={props.addGenre} />
                </Col>
              </Row>
              <Row>
                <Col md={6} sm={6} lg={6}>
                  <TrackProfile track={props.currentTrack.track} />
                </Col>
                <Col md={6} sm={6} lg={6}>
                  <Row>
                    <Col md={12} sm={12} lg={12}>
                      <TrackGenres track={props.currentTrack.track} />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12} sm={12} lg={12}>
                      <TrackPlaylists track={props.currentTrack} />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </CardText>
          </Card>
        </Col>
        <Col md={6} sm={6} lg={6}>
          <Card>
            <CardTitle title='Queue' />
            <CardText>
              <QueueContainer removeFromQueue={props.removeFromQueue}
                setTrack={props.setTrack}
                addGenre={props.addGenre} />
            </CardText>
          </Card>
        </Col>
      </Row>
    </Grid>
  </div>
)

GenrePage.propTypes = {
  dispatchAddGenre: React.PropTypes.func,
  dispatchRemoveFromQueue: React.PropTypes.func,
  dispatchSetTrack: React.PropTypes.func,
  currentTrack: React.PropTypes.object
}

export default GenrePage
