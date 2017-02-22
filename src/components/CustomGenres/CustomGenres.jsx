import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Popover from 'material-ui/Popover'
import Checkbox from 'material-ui/Checkbox';
import MenuItem from 'material-ui/MenuItem'
import GenreSeeds from 'components/GenreSeeds'
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
    showNewGenreForm: React.PropTypes.func,
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
    const { customGenres, currentCustomGenre, showNewGenreForm } = this.props;
    return (
      <div>
        <Card>
          <CardTitle title={ currentCustomGenre.Name }
            subtitle={ currentCustomGenre.Description }
            actAsExpander={ true }
            showExpandableButton={ true } />
          <CardActions>
            <FlatButton
              onClick={this.handleCustomGenreTouchTap}
              label="Change Genre"
            />
            <FlatButton onClick={ showNewGenreForm } label="New Genre" />
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
          </CardActions>
          <CardText expandable={true}>
            <GenreSeeds addToRecommended={ () => {} }
              currentCustomGenre={ currentCustomGenre } />
          </CardText>
        </Card>
      </div>
    )
  }
}
