import React from 'react'
import TrackItem from 'components/TrackItem'
import ArtistItem from 'components/ArtistItem'
import GenreItem from 'components/GenreItem'
import Playlists from 'components/Playlists'
import EmptyState from 'components/EmptyState'
import { Grid, Row, Col } from 'react-flexbox-grid/lib'
import { Card, CardTitle, CardText, CardHeader } from 'material-ui/Card'
import {Tabs, Tab} from 'material-ui/Tabs';
import { connect } from 'react-redux'

export const GenreSeeds = (props) => (
  <Card>
    <CardTitle title={ 'Available Seeds' } />
    <CardText>
      <Tabs>
        <Tab label={ `Seeds for ${ props.name }` } >
          <Tabs>
            <Tab label="Tracks" >
              <Card>
                <CardText>
                  { props.tracks.map(track =>
                    <TrackItem key={ `${props.labelKey}_track_${track.SpotifyID}` }
                      track={ track }
                      addToRecommended={() => props.addToRecommended('tracks', track)}/>
                  ) }
                </CardText>
              </Card>
            </Tab>
            <Tab label="Artists" >
              <Card>
                <CardText>
                  { props.artists.map(artist =>
                    <ArtistItem key={ `${props.labelKey}_artist_${artist.id}` }
                      artist={ artist }
                      addToRecommended={() => props.addToRecommended('artists', artist)} />
                  ) }
                </CardText>
              </Card>
            </Tab>
          </Tabs>
        </Tab>
      </Tabs>
    </CardText>
  </Card>
)

GenreSeeds.propTypes = {
  queue: React.PropTypes.object,
  setTrack: React.PropTypes.func,
  removeFromQueue: React.PropTypes.func,
  discardTrackFromQueue: React.PropTypes.func,
  addToRecommended: React.PropTypes.func,
}

export default GenreSeeds
