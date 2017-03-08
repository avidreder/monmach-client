import React from 'react'
import Playlists from 'components/Playlists'
import { Card, CardTitle, CardText } from 'material-ui/Card'
import { Grid, Row, Col } from 'react-flexbox-grid/lib'
import './PlaylistsPage.scss'

export const PlaylistsPage = (props) => (
  <div>
    <Grid fluid>
      <Row>
        <Col md={12} sm={12} lg={12} xs={12}>
          <h1>Playlists</h1>
        </Col>
      </Row>
      <Row>
        <Col md={12} sm={12} lg={12} xs={12}>
          <Card>
            <CardTitle title='Queue' />
            <CardText>
              <Playlists playlists={ props.playlists }
                tracksFromPlaylist={ props.tracksFromPlaylist } />
            </CardText>
          </Card>
        </Col>
      </Row>
    </Grid>
  </div>
)

PlaylistsPage.propTypes = {
  dispatchAddGenre: React.PropTypes.func,
  dispatchRemoveFromQueue: React.PropTypes.func,
  dispatchSetTrack: React.PropTypes.func,
  tracksFromPlaylist: React.PropTypes.func,
  currentTrack: React.PropTypes.object
}

export default PlaylistsPage
