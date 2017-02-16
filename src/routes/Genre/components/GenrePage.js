import React from 'react'
import QueueContainer from 'components/Queue'
import TrackProfile from 'components/TrackProfile'
import TrackGenres from 'components/TrackGenres'
import TrackCustomGenres from 'components/TrackCustomGenres'
import GenreItem from 'components/GenreItem'
import TrackPlaylists from 'components/TrackPlaylists'
import TrackPlayer from 'components/TrackPlayer'
import Badge from 'material-ui/Badge'
import Playlists from 'components/Playlists'
import CustomGenres from 'components/CustomGenres'
import { Card, CardTitle, CardText, CardHeader } from 'material-ui/Card'
import Checkbox from 'material-ui/Checkbox';
import { Grid, Row, Col } from 'react-flexbox-grid/lib'
import {Tabs, Tab} from 'material-ui/Tabs';
import './GenrePage.scss'

const genreName = 'My Custom Genre'

export const GenrePage = (props) => (
  <div>
    <Grid fluid>
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
                    discardTrackFromPlayer={ (track) => props.discardTrackFromPlayer(props.currentCustomGenre.ID, track) } />
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
                        removeSpotifyGenre={ props.removeSpotifyGenre } />
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
          <Tabs>
            <Tab label={ props.currentCustomGenre.Name }>
              <Row>
                <Col md={12} sm={12} lg={12}>
                  <CustomGenres customGenres={ props.genres }
                    setCurrentCustomGenre={ props.setCurrentCustomGenre }
                    currentCustomGenre={ props.currentCustomGenre }
                    showNewGenreForm={ props.showNewGenreForm } />
                </Col>
              </Row>
              <Row>
                <Col md={12} sm={12} lg={12}>
                  <Tabs>
                    <Tab label="Tracks" >
                      <Card>
                        <CardText>
                          <QueueContainer queue={props.currentCustomGenre.SeedTracks}
                            removeFromQueue={props.removeFromQueue}
                            setTrack={props.setTrack}
                            discardTrackFromQueue={ (track) => props.discardTrackFromQueue(props.currentCustomGenre.ID, track) }
                            addGenre={props.addGenre} />
                        </CardText>
                      </Card>
                    </Tab>
                    <Tab label="Genres">
                      <Card>
                        <CardText>
                          { props.currentCustomGenre.SeedArtists.map(genre =>
                            <GenreItem key={ genre }
                              genre={ genre } />
                          ) }
                        </CardText>
                      </Card>
                    </Tab>
                  </Tabs>
                </Col>
              </Row>
            </Tab>
            <Tab label='Queue'>
              <Row>
                <Col md={12} sm={12} lg={12}>
                  <Tabs>
                    <Tab label="Sources" >
                      <Row>
                        <Col md={12} sm={12} lg={12}>
                          <Tabs>
                            <Tab label="Playlists" >
                              <Card>
                                <CardText>
                                  <Playlists playlists={ props.playlists }
                                    tracksFromPlaylist={ props.tracksFromPlaylist } />
                                </CardText>
                              </Card>
                            </Tab>
                            <Tab label="Genres">
                              <Card>
                                <CardHeader title='Track Spotify Genres' />
                                <CardText>
                                  { props.spotifyGenres.map(genre =>
                                    <GenreItem key={ genre }
                                      genre={ genre } />
                                  ) }
                                </CardText>
                              </Card>
                            </Tab>
                          </Tabs>
                        </Col>
                      </Row>
                    </Tab>
                    <Tab label="Queue" >
                      <Row>
                        <Col md={12} sm={12} lg={12}>
                          <Card>
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
                    </Tab>
                  </Tabs>
                </Col>
              </Row>
            </Tab>
          </Tabs>
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
  playlists: React.PropTypes.array,
  chartData: React.PropTypes.array,
}

export default GenrePage
