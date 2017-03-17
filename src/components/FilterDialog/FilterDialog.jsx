import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from 'store/coreActionCreators'
import Dialog from 'material-ui/Dialog'
import FontIcon from 'material-ui/FontIcon'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import IconButton from 'material-ui/IconButton'
import { amber500 } from 'material-ui/styles/colors'
import _ from 'lodash'

class FilterDialogContainer extends Component {
  static propTypes = {
    data: React.PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.state = {
      filters: this.props.filters,
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

  render() {
    const { filters } = this.state
    const { filterDialogOpen } = this.props
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
    const starInputs = []
    const ratingActive = filters.active.indexOf('rating') > -1
    const toggleIcon = ratingActive ? 'cancel' : 'check_circle'
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
    starInputs.push((
      <IconButton key={'toggle'} onClick={() => this.toggleFilter('rating')}>
        <FontIcon
          className='material-icons'>
          {toggleIcon}
        </FontIcon>
      </IconButton>
    ))
    return (
      <div>
        <Dialog open={ filterDialogOpen }
          actions={ actions }
          contentStyle={ customContentStyle }
          onActionTouchTap={this.handleActionTouchTap}
          onRequestClose={this.handleRequestClose} >
          <div>
              { starInputs }
          </div>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filterDialogOpen: state.core.get('filterDialogOpen'),
    filters: state.core.get('genreTracksFilters').toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilters: (filters) => {
      dispatch(actionCreators.updateFilters('genreTracksFilters', filters))
    },
    closeModal: () => {
      dispatch(actionCreators.hideFilterDialog())
    }
  }
}

const FilterDialog = connect(mapStateToProps, mapDispatchToProps)(FilterDialogContainer)

export default FilterDialog
