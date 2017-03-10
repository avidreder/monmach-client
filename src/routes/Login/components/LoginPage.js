import React from 'react'
import RaisedButton from 'material-ui/FlatButton'
import CustomGenres from 'components/CustomGenres'
import QueueContainer from 'components/Queue'
import TrackProfile from 'components/TrackProfile'
import withEmptyState from 'components/EmptyState'
import CurrentTrack from 'components/CurrentTrack'
import CurrentQueue from 'components/CurrentQueue'
import TrackGenres from 'components/TrackGenres'
import TrackCustomGenres from 'components/TrackCustomGenres'
import {Tabs, Tab} from 'material-ui/Tabs';
import TrackPlaylists from 'components/TrackPlaylists'
import TrackPlayer from 'components/TrackPlayer'
import Badge from 'material-ui/Badge'
import { Card, CardTitle, CardText, CardHeader, CardActions } from 'material-ui/Card'
import Checkbox from 'material-ui/Checkbox';
import { Grid, Row, Col } from 'react-flexbox-grid/lib'
import './LoginPage.scss'

const serverAddress = config ? config.browser_api_path : 'https://app.monmach.com'
const genreName = 'My Custom Genre'

export const LoginPage = (props) => (
  <Grid fluid>
    <Row>
      <Col md={12} sm={12} lg={12} xs={12}>
        <RaisedButton primary href={`${serverAddress}/auth/spotify/start`} label={'Log In with Spotify'} />
      </Col>
    </Row>
  </Grid>
)

export default LoginPage
