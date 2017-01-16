import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardHeader, CardText } from 'material-ui/Card'
import Popover from 'material-ui/Popover'
import Checkbox from 'material-ui/Checkbox';
import MenuItem from 'material-ui/MenuItem'
import * as _ from 'lodash'

export default class TrackGenres extends Component {
  constructor(props){
    super(props)
    this.state = { genreOpen: false, customGenreOpen: false }
  }
  static propTypes = {
    track: React.PropTypes.object,
    genres: React.PropTypes.array,
    spotifyGenres: React.PropTypes.array,
    addGenre: React.PropTypes.func,
    removeGenre: React.PropTypes.func,
    addCustomGenre: React.PropTypes.func,
    removeCustomGenre: React.PropTypes.func,
  }
  handleGenreTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      genreOpen: true,
      anchorEl: event.currentTarget,
    });
  };
  handleCustomGenreTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      customGenreOpen: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      genreOpen: false,
      customGenreOpen: false,
    });
  };
  render() {
    const { genreOpen, customGenreOpen, anchorEl } = this.state;
    const { track, spotifyGenres, genres, addSpotifyGenre, removeSpotifyGenre, addCustomGenre, removeCustomGenre } = this.props;
    return (
      <div>
        <Card>
          <CardHeader title='Track Spotify Genres' />
          <CardText>
            { spotifyGenres.map(genre =>
              _.includes(track.Genres, genre) && <Checkbox
                key={ genre }
                label={ genre }
                checked
                onCheck={ () => removeSpotifyGenre(genre) }
              />
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
        <Card>
          <CardHeader title='Track Custom Genres' />
          <CardText>
            { _.filter(genres, (o) => (_.includes(track.CustomGenres, o.ID))).map(genre => (
              <Checkbox
                key={ genre.ID }
                label={ genre.Name }
                checked
                onCheck={ () => removeCustomGenre(genre) } />
              )
            ) }
            <RaisedButton
              onTouchTap={this.handleCustomGenreTouchTap}
              label="Add..."
            />
            <Popover open={ customGenreOpen }
              anchorEl={ anchorEl }
              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              onRequestClose={this.handleRequestClose}>
              { _.reject(genres, (o) => (_.includes(track.CustomGenres, o.ID))).map(genre =>
                <Checkbox
                  key={ genre.ID }
                  label={ genre.Name }
                  checked={ false }
                  onCheck={ () => addCustomGenre(genre) }
                />
              ) }
            </Popover>
          </CardText>
        </Card>
      </div>
    )
  }
}
