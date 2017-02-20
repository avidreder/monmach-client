import React from 'react'
import QueueContainer from 'components/Queue'
import QueueItem from 'components/QueueItem'
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
          <QueueContainer queue={props.currentCustomGenre.SeedTracks}
            removeFromQueue={props.removeFromQueue}
            setTrack={props.setTrack}
            discardTrackFromQueue={ (track) => props.discardTrackFromQueue(props.currentCustomGenre.ID, track) }
            addGenre={props.addGenre} />
        </CardText>
      </Card>
    </Tab>
    <Tab label="Artists" >
      <Card>
        <CardText>
          <QueueContainer queue={props.currentCustomGenre.SeedTracks}
            removeFromQueue={props.removeFromQueue}
            setTrack={props.setTrack}
            discardTrackFromQueue={ (track) => props.discardTrackFromQueue(props.currentCustomGenre.ID, track) }
            />
        </CardText>
      </Card>
    </Tab>
    <Tab label="Genres">
      <Card>
        <CardText>
          { props.currentCustomGenre.SeedGenres.map(genre =>
            <GenreItem key={ genre }
              genre={ genre } />
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
}

export default GenreSeeds
