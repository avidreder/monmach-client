import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardHeader, CardText } from 'material-ui/Card'
import Popover from 'material-ui/Popover'
import Checkbox from 'material-ui/Checkbox'
import MenuItem from 'material-ui/MenuItem'
import {GridList, GridTile} from 'material-ui/GridList';
import * as _ from 'lodash'

export default class TrackGenres extends Component {
  constructor(props){
    super(props)
    this.state = { genreOpen: false }
  }
  static propTypes = {
    track: React.PropTypes.object,
    spotifyGenres: React.PropTypes.array,
    addGenre: React.PropTypes.func,
    removeGenre: React.PropTypes.func,
    addGenreToGenre: React.PropTypes.func,
  }
  handleGenreTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      genreOpen: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      genreOpen: false,
    });
  };
  render() {
    const { genreOpen, anchorEl } = this.state;
    const { track, spotifyGenres, addSpotifyGenre, removeSpotifyGenre, addGenreToGenre } = this.props;
    return (
      <div>
        <Card>
          <CardHeader title='Track Spotify Genres' />
          <CardText>
            { spotifyGenres.map(genre =>
              _.includes(track.Genres, genre) &&
              <div key={ `${genre}_actions` }>
                <Checkbox
                  label={ genre }
                  checked
                  onCheck={ () => removeSpotifyGenre(genre) }
                />
                <RaisedButton
                  onTouchTap={ () => addGenreToGenre(genre) }
                  label={ genre }
                />
              </div>
            ) }
            <RaisedButton
              onTouchTap={this.handleGenreTouchTap}
              label="Add..."
            />
            <Popover open={ genreOpen }
              anchorEl={ anchorEl }
              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              onRequestClose={this.handleRequestClose}>
              { _.reject(spotifyGenres, (o) => (_.includes(track.Genres, o))).map(genre =>
                <Checkbox
                  key={ genre }
                  label={ genre }
                  checked={ false }
                  onCheck={ () => addSpotifyGenre(genre) }
                />
              ) }
            </Popover>
          </CardText>
        </Card>
      </div>
    )
  }
}
