import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from 'store/coreActionCreators'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import _ from 'lodash'

class GenreFormContainer extends Component {
  static propTypes = {
    data: React.PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    }
  }

  handleActionTouchTap = () => {
    const { submitForm } = this.props
    const { name, description } = this.state
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
      name: e.target.value,
    })
  }

  handleDescriptionChange = (e) => {
    this.setState({
      description: e.target.value,
    })
  }

  render() {
    const { name, description } = this.state
    const { newGenreFormOpen } = this.props
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleActionTouchTap}
      />,
    ];
    const customContentStyle = {
      width: '100%',
      maxWidth: 'none',
    }
    return (
      <div>
        <Dialog open={ newGenreFormOpen }
          actions={ actions }
          contentStyle={ customContentStyle }
          onActionTouchTap={this.handleActionTouchTap}
          onRequestClose={this.handleRequestClose} >
          <div>
            <TextField
              floatingLabelText="Name"
              floatingLabelFixed={true}
              id="name-text-field"
              value={name}
              onChange={this.handleNameChange}
            />
            <br />
            <TextField
              floatingLabelText="Description"
              floatingLabelFixed={true}
              id="description-text-field"
              value={description}
              onChange={this.handleDescriptionChange}
            />
          </div>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newGenreFormOpen: state.core.get('newGenreFormOpen')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: (name, description) => {
      dispatch(actionCreators.createNewGenreThunk(name, description))
    },
    closeModal: () => {
      dispatch(actionCreators.hideNewGenreForm())
    }
  }
}

const GenreForm = connect(mapStateToProps, mapDispatchToProps)(GenreFormContainer)

export default GenreForm
