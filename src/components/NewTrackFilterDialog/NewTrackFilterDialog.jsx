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
import Toggle from 'material-ui/Toggle'
import { amber500 } from 'material-ui/styles/colors'
import { Grid, Row, Col } from 'react-flexbox-grid/lib'
import _ from 'lodash'

class NewTrackFilterDialogContainer extends Component {
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

  selectAllArtists = () => {
    const {
      filters,
    } = this.state
    const {
      artists,
    } = this.props
    artists.map((artist) => {
      if (filters.artists.indexOf(artist) == -1) {
        filters.artists.push(artist)
      }
    })
    this.setState({
      filters,
    })
  }

  removeAllArtists = () => {
    const {
      filters,
    } = this.state
    filters.artists = []
    this.setState({
      filters,
    })
  }

  selectAllGenres = () => {
    const {
      filters,
    } = this.state
    const {
      genres,
    } = this.props
    genres.map((genre) => {
      if (filters.genres.indexOf(genre) == -1) {
        filters.genres.push(genre)
      }
    })
    this.setState({
      filters,
    })
  }

  removeAllGenres = () => {
    const {
      filters,
    } = this.state
    filters.genres = []
    this.setState({
      filters,
    })
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
      <Toggle labelPosition='right' toggled={ genresActive } key={'toggle'} onClick={() => this.toggleFilter('genres')} />
    )
    const selectAllGenresButton = (
      <FlatButton key={'genre_select_all'} onClick={() => this.selectAllGenres()} >
        Select all
      </FlatButton>
    )
    const deselectAllGenresButton = (
      <FlatButton key={'genre_deselect_all'} onClick={() => this.removeAllGenres()} >
        Remove all
      </FlatButton>
    )
    genreInputs.push((
      <Card key='GenreCard'>
        <CardHeader title='Genres' subtitle='Must contain the following genres:'
          showExpandableButton
          closeIcon={ genreToggleButton }
          openIcon={ genreToggleButton } >
          { genresActive && <Row>
            <Col>
              { selectAllGenresButton }
            </Col>
            <Col>
              { deselectAllGenresButton }
            </Col>
          </Row> }
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
        <Toggle labelPosition='right' toggled={ artistsActive } key={'toggle'} onClick={() => this.toggleFilter('artists')} />
    )
    const selectAllArtistsButton = (
      <FlatButton key={'artist_select_all'} onClick={() => this.selectAllArtists()} >
        Select all
      </FlatButton>
    )
    const deselectAllArtistsButton = (
      <FlatButton key={'artist_deselect_all'} onClick={() => this.removeAllArtists()} >
        Remove all
      </FlatButton>
    )
    artistInputs.push((
      <Card key='ArtistCard'>
        <CardHeader title='Artists' subtitle='Must contain one of the following artists'
          showExpandableButton
          closeIcon={ artistToggleButton }
          openIcon={ artistToggleButton }>
          { artistsActive && <Row>
            <Col>
              { selectAllArtistsButton }
            </Col>
            <Col>
              { deselectAllArtistsButton }
            </Col>
          </Row> }
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
    const { newTrackFilterDialogOpen, genres } = this.props
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
    const genreInputs = this.buildGenreInputs()
    const artistInputs = this.buildArtistInputs()
    const newTracksActive = filters.active.indexOf('newTracks') > -1
    const newTracksToggleButton = (
      <Toggle labelPosition='right' toggled={ newTracksActive } key={'toggle'} onClick={() => this.toggleFilter('newTracks')} />
    )
    const newTracksInput = (
      <Card key='NewTracksCard'>
        <CardHeader title='New tracks' subtitle='Tracks must be new for the genre'
          showExpandableButton
          closeIcon={ newTracksToggleButton }
          openIcon={ newTracksToggleButton } >
        </CardHeader>
      </Card>
    )
    return (
      <div>
        <Dialog open={ newTrackFilterDialogOpen }
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
                    { newTracksInput }
                  </Col>
                  <Col md={6} sm={6} lg={6} xs={6}>
                    { genreInputs }
                  </Col>
                  <Col md={6} sm={6} lg={6} xs={6}>
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
    newTrackFilterDialogOpen: state.core.get('newTrackFilterDialogOpen'),
    filters: state.core.get('newTrackFilters').toJS(),
    genres: state.core.get('spotifyGenres').toJS(),
    artists: state.core.get('currentQueueArtistList').toJS(),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilters: (filters) => {
      dispatch(actionCreators.updateFilters('newTrackFilters', filters))
    },
    closeModal: () => {
      dispatch(actionCreators.hideNewTrackFilterDialog())
    }
  }
}

const NewTrackFilterDialog = connect(mapStateToProps, mapDispatchToProps)(NewTrackFilterDialogContainer)

export default NewTrackFilterDialog
