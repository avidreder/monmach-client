import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardHeader, CardText } from 'material-ui/Card'
import Popover from 'material-ui/Popover'
import Checkbox from 'material-ui/Checkbox'
import MenuItem from 'material-ui/MenuItem'
import {GridList, GridTile} from 'material-ui/GridList';
import * as _ from 'lodash'

export default class TrackCustomGenres extends Component {
  constructor(props){
    super(props)
    this.state = { customGenreOpen: false }
  }
  static propTypes = {
    track: React.PropTypes.object,
    genres: React.PropTypes.array,
    addCustomGenre: React.PropTypes.func,
    removeCustomGenre: React.PropTypes.func,
  }
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
      customGenreOpen: false,
    });
  };
  render() {
    const { customGenreOpen, anchorEl } = this.state;
    const { track, genres, addCustomGenre, removeCustomGenre } = this.props;
    return (
      <div>
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
