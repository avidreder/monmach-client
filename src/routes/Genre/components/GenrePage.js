import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import CustomGenres from 'components/CustomGenres'
import QueueContainer from 'components/Queue'
import TrackProfile from 'components/TrackProfile'
import TrackGenres from 'components/TrackGenres'
import TrackCustomGenres from 'components/TrackCustomGenres'
import {Tabs, Tab} from 'material-ui/Tabs';
import TrackPlaylists from 'components/TrackPlaylists'
import TrackPlayer from 'components/TrackPlayer'
import Badge from 'material-ui/Badge'
import { Card, CardTitle, CardText, CardHeader } from 'material-ui/Card'
import Checkbox from 'material-ui/Checkbox';
import { Grid, Row, Col } from 'react-flexbox-grid/lib'
import './GenrePage.scss'

const genreName = 'My Custom Genre'

export const GenrePage = (props) => (
  <div>
    <Grid fluid>
      <Row>
        <Col md={12} sm={12} lg={12}>
          <CustomGenres customGenres={ props.genres }
            setCurrentCustomGenre={ props.setCurrentCustomGenre }
            currentCustomGenre={ props.currentCustomGenre }
            showNewGenreForm={ props.showNewGenreForm } />
        </Col>
      </Row>
      <Row>
        <Col md={6} sm={6} lg={6}>
          <Row>
            <Col md={12} sm={12} lg={12}>
              <Card>
                <CardTitle title='Currently Playing' />
                <CardText>
                  <TrackPlayer track={ props.currentTrack }
                    addRating={ props.addRating }
                    addTrackToGenre={ (track) => props.addTrackToGenre(props.currentCustomGenre.ID, track) }
                    removeTrackFromGenre={ (artist) => props.removeTrackFromGenre(props.currentCustomGenre.ID, artist) }
                    discardTrackFromPlayer={ (track) => props.discardTrackFromPlayer(props.currentCustomGenre.ID, track) }
                    addArtistToGenre={ (artist) => props.addArtistToGenre(props.currentCustomGenre.ID, artist) }
                    removeArtistFromGenre={ (artist) => props.removeArtistFromGenre(props.currentCustomGenre.ID, artist) } />
                </CardText>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12} sm={12} lg={12}>
              <TrackProfile chartData={ props.chartData } track={ props.currentTrack } />
            </Col>
          </Row>
          <Row>
            <Col md={12} sm={12} lg={12}>
              <Card>
                <CardText>
                  <Row>
                    <Col md={4} sm={4} lg={4}>
                      <TrackGenres track={ props.currentTrack }
                        spotifyGenres={ props.spotifyGenres }
                        addSpotifyGenre={ props.addSpotifyGenre }
                        removeSpotifyGenre={ props.removeSpotifyGenre }
                        addGenreToGenre={ (genre) => props.addGenreToGenre(props.currentCustomGenre.ID, genre) }
                        removeGenreFromGenre={ (genre) => props.removeGenreFromGenre(props.currentCustomGenre.ID, genre) } />
                    </Col>
                    <Col md={4} sm={4} lg={4}>
                      <TrackCustomGenres genres={ props.genres }
                        track={ props.currentTrack }
                        addCustomGenre={ props.addCustomGenre }
                        removeCustomGenre={ props.removeCustomGenre } />
                    </Col>
                    <Col md={4} sm={4} lg={4}>
                      <TrackPlaylists track={ props.currentTrack }
                        playlists={ props.playlists }
                        addPlaylist={ props.addPlaylist }
                        removePlaylist={ props.removePlaylist } />
                    </Col>
                  </Row>
                </CardText>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md={6} sm={6} lg={6}>
          <Card>
            <CardTitle title='New Track Queue'>
              <FlatButton
                label="More Tracks"
                primary={true}
                onTouchTap={ props.showPopulateQueueDialog }
              />
            </CardTitle>
            <CardText>
              <QueueContainer queue={props.queue.TrackQueue}
                removeFromQueue={props.removeFromQueue}
                setTrack={props.setTrack}
                discardTrackFromQueue={ (track) => props.discardTrackFromQueue(props.currentCustomGenre.ID, track) }
                addGenre={props.addGenre} />
            </CardText>
          </Card>
        </Col>
      </Row>
    </Grid>
  </div>
)

GenrePage.propTypes = {
  currentCustomGenre: React.PropTypes.object,
  addGenre: React.PropTypes.func,
  removeFromQueue: React.PropTypes.func,
  setTrack: React.PropTypes.func,
  addRating: React.PropTypes.func,
  addTrackToGenre: React.PropTypes.func,
  addTrackToGenre: React.PropTypes.func,
  discardTrackFromQueue: React.PropTypes.func,
  discardTrackFromPlayer: React.PropTypes.func,
  currentTrack: React.PropTypes.object,
  genres: React.PropTypes.array,
  spotifyGenres: React.PropTypes.array,
  addGenre: React.PropTypes.func,
  removeGenre: React.PropTypes.func,
  addCustomGenre: React.PropTypes.func,
  removeCustomGenre: React.PropTypes.func,
  tracksFromPlaylist: React.PropTypes.func,
  addPlaylist: React.PropTypes.func,
  removePlaylist: React.PropTypes.func,
  showPopulateQueueDialog: React.PropTypes.func,
  playlists: React.PropTypes.array,
  chartData: React.PropTypes.array,
  getRecommendedTracks: React.PropTypes.func,
}

export default GenrePage
