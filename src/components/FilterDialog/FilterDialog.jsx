import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from 'store/coreActionCreators'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import _ from 'lodash'

class FilterDialogContainer extends Component {
  static propTypes = {
    data: React.PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.filters.rating,
      genres: this.props.filters.genres,
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
    const { closeModal } = this.props
    closeModal()
  }

  handleNameChange = (e) => {
    this.setState({
      rating: e.target.value,
    })
  }

  handleDescriptionChange = (e) => {
    this.setState({
      genres: e.target.value,
    })
  }

  render() {
    const { rating, genres } = this.state
    const { filterDialogOpen, filters } = this.props
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />,
    ];
    const customContentStyle = {
      width: '100%',
      maxWidth: 'none',
    }
    return (
      <div>
        <Dialog open={ filterDialogOpen }
          actions={ actions }
          contentStyle={ customContentStyle }
          onActionTouchTap={this.handleActionTouchTap}
          onRequestClose={this.handleRequestClose} >
          <div>
            <TextField
              floatingLabelText="Rating"
              floatingLabelFixed={true}
              id="name-text-field"
              value={ rating }
              onChange={ this.handleRatingChange }
            />
            <br />
            <TextField
              floatingLabelText="Genre"
              floatingLabelFixed={true}
              id="description-text-field"
              value={ genres }
              onChange={this.handleGenresChange}
            />
          </div>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filterDialogOpen: state.core.get('filterDialogOpen'),
    filters: state.core.get('genreTracksFilters')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilters: (filter, value) => {
      dispatch(actionCreators.updateFilters(filter, value))
    },
    closeModal: () => {
      dispatch(actionCreators.hideFilterDialog())
    }
  }
}

const FilterDialog = connect(mapStateToProps, mapDispatchToProps)(FilterDialogContainer)

export default FilterDialog
