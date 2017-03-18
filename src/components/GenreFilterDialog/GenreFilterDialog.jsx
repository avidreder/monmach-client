import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from 'store/coreActionCreators'
import { Card, CardTitle, CardHeader, CardText } from 'material-ui/Card'
import Dialog from 'material-ui/Dialog'
import FontIcon from 'material-ui/FontIcon'
import FlatButton from 'material-ui/FlatButton'
import Popover from 'material-ui/Popover'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import IconButton from 'material-ui/IconButton'
import Checkbox from 'material-ui/Checkbox'
import { amber500 } from 'material-ui/styles/colors'
import { Grid, Row, Col } from 'react-flexbox-grid/lib'
import _ from 'lodash'

class GenreFilterDialogContainer extends Component {
  static propTypes = {
    data: React.PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.state = {
      filters: this.props.filters,
      genreOpen: false,
    }
  }

  handleActionTouchTap = () => {
    const { submitForm } = this.props
    const { rating, genres } = this.state
    if (name != '' && description != '') {
      submitForm(name, description)
    }
  }

  handleRequestClose = () => {
    const { closeModal, setFilters } = this.props
    const { filters } = this.state
    setFilters(filters)
    closeModal()
  }

  toggleFilter = (filterName) => {
    let { filters } = this.state
    if (filters.active.indexOf(filterName) == -1) {
      filters.active.push(filterName)
    } else {
      filters.active = _.without(filters.active, filterName)
    }
    this.setState({
      filters,
    })
  }

  addRating = (value) => {
    const { filters } = this.state
    filters.rating = value
    this.setState({
      filters,
    })
  }

  addGenre = (genre) => {
    const { filters } = this.state
    if (filters.genres.indexOf(genre) == -1) {
      filters.genres.push(genre)
    }
    this.setState({
      filters,
    })
  }

  removeGenre = (genre) => {
    const { filters } = this.state
    if (filters.genres.indexOf(genre) != -1) {
      filters.genres = _.without(filters.genres, genre)
    }
    this.setState({
      filters,
    })
  }

  handleGenreTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      genreOpen: true,
      anchorEl: event.currentTarget,
    });
  };

  handleGenreRequestClose = () => {
    this.setState({
      genreOpen: false,
    });
  };

  buildStarInputs = () => {
    const { filters } = this.state
    const ratingActive = filters.active.indexOf('rating') > -1
    const ratingToggleIcon = ratingActive ? 'cancel' : 'check_circle'
    const starInputs = []
    if (ratingActive) {
      _.range(1, filters.rating + 1).map((value) => {
        starInputs.push((
          <IconButton key={ value } onClick={() => this.addRating(value)}>
            <FontIcon
              className='material-icons'
              color={ amber500 }>
              star
            </FontIcon>
          </IconButton>
        ))
      })
      _.range(filters.rating + 1, 6).map((value) => {
        starInputs.push((
          <IconButton key={ value } onClick={() => this.addRating(value)}>
            <FontIcon
              className='material-icons'
              hoverColor={ amber500 }>
              star_border
            </FontIcon>
          </IconButton>
        ))
      })
    } else {
      _.range(1, 6).map((value) => {
        starInputs.push((
          <IconButton key={ value } disabled={ true }>
            <FontIcon
              className='material-icons'
              hoverColor={ amber500 }>
              star_border
            </FontIcon>
          </IconButton>
        ))
      })
    }
    const starToggleButton = (
      <FontIcon key={'toggle'} onClick={() => this.toggleFilter('rating')}
        className='material-icons'>
        {ratingToggleIcon}
      </FontIcon>
    )
    return (
      <Card key='RatingCard'>
        <CardHeader title='Rating'
          showExpandableButton
          closeIcon={ starToggleButton }
          openIcon={ starToggleButton }>
          { starInputs }
        </CardHeader>
      </Card>
    )
  }

  render() {
    const { filters, genreOpen, anchorEl } = this.state
    const { filterDialogOpen, genres } = this.props
    const actions = [
      <FlatButton
        label="Apply"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />,
    ];
    const customContentStyle = {
      width: '100%',
      maxWidth: 'none',
    }
    const ratingActive = filters.active.indexOf('rating') > -1
    const ratingToggleIcon = ratingActive ? 'cancel' : 'check_circle'
    const starInputs = this.buildStarInputs()
    const genreInputs = []
    const genreHeaderInputs = []
    const genreHeaderPages = []
    const genreBodyPages = []
    const genreBodyInputs = []
    const genresActive = filters.active.indexOf('genres') > -1
    const genresToggleIcon = genresActive ? 'cancel' : 'check_circle'
    const genresPerCol = 5
    if (genresActive) {
      let currentPage = []
      genres.map(genre => {
        if (!_.includes(filters.genres, genre)){
          currentPage.push((
            <Checkbox
              key={ `${genre}_actions_pop` }
              label={ genre }
              checked={ false }
              onCheck={ () => this.addGenre(genre) }
            />
          ))
          if (currentPage.length == genresPerCol) {
            genreBodyPages.push(currentPage)
            currentPage = []
          }
        }
      })
      if (currentPage.length > 0){
        genreBodyPages.push(currentPage)
      }
      currentPage = []
      genres.map(genre => {
        if (_.includes(filters.genres, genre)) {
          currentPage.push((
            <Checkbox key={ `${genre}_actions` }
              label={ genre }
              checked
              onCheck={ () => this.removeGenre(genre) }
            />
          ))
          if (currentPage.length == genresPerCol) {
            genreHeaderPages.push(currentPage)
            currentPage = []
          }
        }
      })
      if (currentPage.length > 0){
        genreHeaderPages.push(currentPage)
      }
    } else {
      let currentPage = []
      genres.map(genre => {
        if (_.includes(filters.genres, genre)) {
          if (currentPage.length == genresPerCol) {
            genreHeaderPages.push(currentPage)
            currentPage = []
          }
          currentPage.push((
            <Checkbox key={ `${genre}_actions_disabled` }
              label={ genre }
              checked
              disabled />
          ))
        }
      })
      if (currentPage.length > 0){
        genreHeaderPages.push(currentPage)
      }
    }
    const genreToggleButton = (
        <FontIcon key={'toggle'} onClick={() => this.toggleFilter('genres')}
          className='material-icons'>
          {genresToggleIcon}
        </FontIcon>
    )
    genreInputs.push((
      <Card key='GenreCard'>
        <CardHeader title='Genres' subtitle='Active'
          showExpandableButton
          closeIcon={ genreToggleButton }
          openIcon={ genreToggleButton } >
          <Row>
            { genreHeaderPages.map((page, i) =>
              <Col key={`genre_header_page_${i}`} >
                { page }
              </Col>
            )}
          </Row>
        </CardHeader>
        { genresActive && <CardHeader subtitle='Available' >
          <Row>
            { genreBodyPages.map((page, i) =>
              <Col key={`genre_body_page_${i}`}>
                { page }
              </Col>
            )}
          </Row>
        </CardHeader> }
      </Card>
    ))
    return (
      <div>
        <Dialog open={ filterDialogOpen }
          actions={ actions }
          autoScrollBodyContent={true}
          contentStyle={ customContentStyle }
          onActionTouchTap={this.handleActionTouchTap}
          onRequestClose={this.handleRequestClose} >
          <Grid fluid>
            <Row>
              <Col md={12} sm={12} lg={12} xs={12}>
                <Row>
                  <Col md={6} sm={6} lg={6} xs={6}>
                    { starInputs }
                  </Col>
                  <Col md={6} sm={6} lg={6} xs={6}>
                    { genreInputs }
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filterDialogOpen: state.core.get('genreFilterDialogOpen'),
    filters: state.core.get('genreTrackFilters').toJS(),
    genres: state.core.get('spotifyGenres').toJS(),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilters: (filters) => {
      dispatch(actionCreators.updateFilters('genreTrackFilters', filters))
    },
    closeModal: () => {
      dispatch(actionCreators.hideGenreFilterDialog())
    }
  }
}

const GenreFilterDialog = connect(mapStateToProps, mapDispatchToProps)(GenreFilterDialogContainer)

export default GenreFilterDialog
