import React from 'react'
import FontIcon from 'material-ui/FontIcon'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'
import { Card, CardTitle, CardText, CardHeader } from 'material-ui/Card'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'
import { grey500 } from 'material-ui/styles/colors'
import TrackItem from 'components/TrackItem'
import ArtistItem from 'components/ArtistItem'
import GenreItem from 'components/GenreItem'

export const RecommendationSeeds = (props) => (
  <div>
    <Card>
      <CardTitle title="Seeds for recommendations" subtitle="Please choose up to 5 tracks, artists, or genres">
        <FlatButton
          label="Get Tracks"
          primary={true}
          onTouchTap={ () => props.getRecommendedTracks(props.recommendationSeeds.tracks, props.recommendationSeeds.artists, props.recommendationSeeds.genres) }
        />
      </CardTitle>
      <CardText>
        { props.recommendationSeeds.tracks.map(track =>
          <TrackItem key={ track.ID }
            track={ track }
            removeFromRecommended={() => props.removeFromRecommended('tracks', track)} />
        ) }
        { props.recommendationSeeds.artists.map(artist =>
          <ArtistItem key={ artist.id }
            artist={ artist }
            removeFromRecommended={() => props.removeFromRecommended('artists', artist)} />
        ) }
        { props.recommendationSeeds.genres.map(genre =>
          <GenreItem key={ genre }
            genre={ genre }
            removeFromRecommended={() => props.removeFromRecommended('genres', genre)} />
        ) }
      </CardText>
    </Card>
  </div>
)

RecommendationSeeds.propTypes = {
  recommendationSeeds: React.PropTypes.object,
  removeFromRecommended: React.PropTypes.func,
}

export default RecommendationSeeds
