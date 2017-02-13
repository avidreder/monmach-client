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
      values: {
        name: null,
        description: null,
      }
    }
  }

  handleActionTouchTap = () => {
    this.setState({
      open: false,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { message } = this.state
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />,
    ];
    return (
      <div>
        <Dialog open={this.state.open}
          actions={ actions }
          onActionTouchTap={this.handleActionTouchTap}
          onRequestClose={this.handleRequestClose} >
          <div>
          { message && message.map((item) => (
            <ul key={ item }>
              <li>{ item.name }</li>
              <li>{ item.statusCode }</li>
              <li>{ item.statusText }</li>
              <li>{ item.message }</li>
            </ul>
          ))}
        </div>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newGenreFormOpen: state.core.get('newGenreFormOpen').toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: (name, description) => {
      dispatch(actionCreators.createNewGenreThunk(name, description))
    },
  }
}

const GenreForm = connect(mapStateToProps, mapDispatchToProps)(GenreFormContainer)

export default GenreForm
