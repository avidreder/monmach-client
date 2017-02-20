import React from 'react'
import TrackItem from 'components/TrackItem'
import ArtistItem from 'components/ArtistItem'
import GenreItem from 'components/GenreItem'
import Playlists from 'components/Playlists'
import { Grid, Row, Col } from 'react-flexbox-grid/lib'
import { Card, CardTitle, CardText, CardHeader } from 'material-ui/Card'
import {Tabs, Tab} from 'material-ui/Tabs';
import { connect } from 'react-redux'

export const GenreSeeds = (props) => (
  <Tabs>
    <Tab label="Tracks" >
      <Card>
        <CardText>
          { props.currentCustomGenre.SeedTracks.map(track =>
            <TrackItem key={ track.ID }
              track={ track }
              addToRecommended={() => props.addToRecommended('tracks', track)}/>
          ) }
        </CardText>
      </Card>
    </Tab>
    <Tab label="Artists" >
      <Card>
        <CardText>
          { props.currentCustomGenre.SeedArtists.map(artist =>
            <ArtistItem key={ artist.id }
              artist={ artist }
              addToRecommended={() => props.addToRecommended('artists', artist)} />
          ) }
        </CardText>
      </Card>
    </Tab>
    <Tab label="Genres">
      <Card>
        <CardText>
          { props.currentCustomGenre.SeedGenres.map(genre =>
            <GenreItem key={ genre }
              genre={ genre }
              addToRecommended={() => props.addToRecommended('genres', genre)} />
          ) }
        </CardText>
      </Card>
    </Tab>
  </Tabs>
)

GenreSeeds.propTypes = {
  queue: React.PropTypes.object,
  setTrack: React.PropTypes.func,
  removeFromQueue: React.PropTypes.func,
  discardTrackFromQueue: React.PropTypes.func,
  addToRecommended: React.PropTypes.func,
}

export default GenreSeeds
