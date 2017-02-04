import React from 'react'
import QueueContainer from 'components/Queue'
import TrackProfile from 'components/TrackProfile'
import TrackGenres from 'components/TrackGenres'
import TrackPlaylists from 'components/TrackPlaylists'
import TrackPlayer from 'components/TrackPlayer'
import CustomGenres from 'components/CustomGenres'
import { Card, CardTitle, CardText } from 'material-ui/Card'
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
            currentCustomGenre={ props.currentCustomGenre } />
        </Col>
      </Row>
      <Row>
        <Col md={6} sm={6} lg={6}>
          <Card>
            <CardTitle title='Currently Playing' />
            <CardText>
              <Row>
                <Col md={12} sm={12} lg={12}>
                  <TrackPlayer track={ props.currentTrack }
                    addRating={ props.addRating }
                    saveTrack={ props.saveTrack }
                    discardTrack={ props.discardTrack } />
                </Col>
              </Row>
              <Row>
                <Col md={6} sm={6} lg={6}>
                  <TrackProfile track={ props.currentTrack } />
                </Col>
                <Col md={6} sm={6} lg={6}>
                  <Row>
                    <Col md={12} sm={12} lg={12}>
                      <TrackGenres genres={ props.genres }
                        track={ props.currentTrack }
                        spotifyGenres={ props.spotifyGenres }
                        addSpotifyGenre={ props.addSpotifyGenre }
                        removeSpotifyGenre={ props.removeSpotifyGenre }
                        addCustomGenre={ props.addCustomGenre }
                        removeCustomGenre={ props.removeCustomGenre } />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12} sm={12} lg={12}>
                      <TrackPlaylists track={ props.currentTrack }
                        playlists={ props.playlists }
                        addPlaylist={ props.addPlaylist }
                        removePlaylist={ props.removePlaylist } />
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
  currentGenre: React.PropTypes.string,
  addGenre: React.PropTypes.func,
  removeFromQueue: React.PropTypes.func,
  setTrack: React.PropTypes.func,
  addRating: React.PropTypes.func,
  saveTrack: React.PropTypes.func,
  discardTrack: React.PropTypes.func,
  currentTrack: React.PropTypes.object,
  genres: React.PropTypes.array,
  spotifyGenres: React.PropTypes.array,
  addGenre: React.PropTypes.func,
  removeGenre: React.PropTypes.func,
  addCustomGenre: React.PropTypes.func,
  removeCustomGenre: React.PropTypes.func,
  addPlaylist: React.PropTypes.func,
  removePlaylist: React.PropTypes.func,
}

export default GenrePage
