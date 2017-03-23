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

  addArtist = (artist) => {
    const { filters } = this.state
    if (filters.artists.indexOf(artist) == -1) {
      filters.artists.push(artist)
    }
    this.setState({
      filters,
    })
  }

  removeArtist = (artist) => {
    const { filters } = this.state
    if (filters.artists.indexOf(artist) != -1) {
      filters.artists = _.without(filters.artists, artist)
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
        <CardHeader title='Rating' subtitle='Must have a rating of at least:'
          showExpandableButton
          closeIcon={ starToggleButton }
          openIcon={ starToggleButton }>
        </CardHeader>
        <CardHeader>
          { starInputs }
        </CardHeader>
      </Card>
    )
  }

  buildGenreInputs() {
    const {
      genres,
    } = this.props
    const {
      filters,
    } = this.state
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
        <CardHeader title='Genres' subtitle='Must contain one of the following genres'
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
        { genresActive && <CardHeader subtitle='Available genres' >
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
    return genreInputs
  }

  buildArtistInputs() {
    const {
      artists,
    } = this.props
    const {
      filters,
    } = this.state
    const artistInputs = []
    const artistHeaderInputs = []
    const artistHeaderPages = []
    const artistBodyPages = []
    const artistBodyInputs = []
    const artistsActive = filters.active.indexOf('artists') > -1
    const artistsToggleIcon = artistsActive ? 'cancel' : 'check_circle'
    const artistsPerCol = 5
    if (artistsActive) {
      let currentPage = []
      artists.map(artist => {
        if (!_.includes(filters.artists, artist)){
          currentPage.push((
            <Checkbox
              key={ `${artist}_actions_pop` }
              label={ artist }
              checked={ false }
              onCheck={ () => this.addArtist(artist) }
            />
          ))
          if (currentPage.length == artistsPerCol) {
            artistBodyPages.push(currentPage)
            currentPage = []
          }
        }
      })
      if (currentPage.length > 0){
        artistBodyPages.push(currentPage)
      }
      currentPage = []
      artists.map(artist => {
        if (_.includes(filters.artists, artist)) {
          currentPage.push((
            <Checkbox key={ `${artist}_actions` }
              label={ artist }
              checked
              onCheck={ () => this.removeArtist(artist) }
            />
          ))
          if (currentPage.length == artistsPerCol) {
            artistHeaderPages.push(currentPage)
            currentPage = []
          }
        }
      })
      if (currentPage.length > 0){
        artistHeaderPages.push(currentPage)
      }
    } else {
      let currentPage = []
      artists.map(artist => {
        if (_.includes(filters.artists, artist)) {
          if (currentPage.length == artistsPerCol) {
            artistHeaderPages.push(currentPage)
            currentPage = []
          }
          currentPage.push((
            <Checkbox key={ `${artist}_actions_disabled` }
              label={ artist }
              checked
              disabled />
          ))
        }
      })
      if (currentPage.length > 0){
        artistHeaderPages.push(currentPage)
      }
    }
    const artistToggleButton = (
        <FontIcon key={'toggle'} onClick={() => this.toggleFilter('artists')}
          className='material-icons'>
          {artistsToggleIcon}
        </FontIcon>
    )
    artistInputs.push((
      <Card key='ArtistCard'>
        <CardHeader title='Artists' subtitle='Must contain one of the following artists'
          showExpandableButton
          closeIcon={ artistToggleButton }
          openIcon={ artistToggleButton } >
          <Row>
            { artistHeaderPages.map((page, i) =>
              <Col key={`artist_header_page_${i}`} >
                { page }
              </Col>
            )}
          </Row>
        </CardHeader>
        { artistsActive && <CardHeader subtitle='Available artists' >
          <Row>
            { artistBodyPages.map((page, i) =>
              <Col key={`artist_body_page_${i}`}>
                { page }
              </Col>
            )}
          </Row>
        </CardHeader> }
      </Card>
    ))
    return artistInputs
  }

  render() {
    const { filters, genreOpen, anchorEl } = this.state
    const { genreFilterDialogOpen, genres } = this.props
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
    const genreInputs = this.buildGenreInputs()
    const artistInputs = this.buildArtistInputs()
    return (
      <div>
        <Dialog open={ genreFilterDialogOpen }
          actions={ actions }
          autoScrollBodyContent={true}
          contentStyle={ customContentStyle }
          onActionTouchTap={this.handleActionTouchTap}
          onRequestClose={this.handleRequestClose} >
          <Grid fluid>
            <Row>
              <Col md={12} sm={12} lg={12} xs={12}>
                <Row>
                  <Col md={6} sm={6} lg={6} xs={12}>
                    { starInputs }
                  </Col>
                  <Col md={6} sm={6} lg={6} xs={12}>
                    { genreInputs }
                  </Col>
                  <Col md={6} sm={6} lg={6} xs={12}>
                    { artistInputs }
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
    genreFilterDialogOpen: state.core.get('genreFilterDialogOpen'),
    filters: state.core.get('genreTrackFilters').toJS(),
    genres: state.core.get('customGenreGenreList').toJS(),
    artists: state.core.get('customGenreArtistList').toJS(),
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
