import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardHeader, CardText } from 'material-ui/Card'
import Popover from 'material-ui/Popover'
import Checkbox from 'material-ui/Checkbox';
import MenuItem from 'material-ui/MenuItem'
import * as _ from 'lodash'

export default class CustomGenres extends Component {
  constructor(props){
    super(props)
    this.state = { customGenreOpen: false }
  }
  static propTypes = {
    currentCustomGenre: React.PropTypes.object,
    customGenres: React.PropTypes.array,
    setCurrentCustomGenre: React.PropTypes.func,
  }
  handleCustomGenreTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      customGenreOpen: true,
      anchorEl: event.currentTarget,
    });
  };
  setGenreAndCloseSelect = (genre) => {
    const { setCurrentCustomGenre } = this.props;
    setCurrentCustomGenre(genre);
    this.handleRequestClose();
  }
  handleRequestClose = () => {
    this.setState({
      customGenreOpen: false,
    });
  };
  render() {
    const { customGenreOpen, anchorEl } = this.state;
    const { customGenres, currentCustomGenre } = this.props;
    return (
      <div>
        <Card>
          <CardHeader title={ currentCustomGenre.Name } />
          <CardText>
            <RaisedButton
              onTouchTap={this.handleCustomGenreTouchTap}
              label="Change genre..."
            />
          <Popover open={ customGenreOpen }
              anchorEl={ anchorEl }
              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              onRequestClose={this.handleRequestClose} >
              { customGenres.map(genre =>
                <RaisedButton
                  key={ genre.ID }
                  label={ genre.Name }
                  primary={ genre.ID == currentCustomGenre.ID }
                  onClick={ () => this.setGenreAndCloseSelect(genre) }
                />
              ) }
            </Popover>
          </CardText>
        </Card>
      </div>
    )
  }
}
