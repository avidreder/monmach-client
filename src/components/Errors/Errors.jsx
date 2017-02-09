import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import _ from 'lodash'

class ErrorsContainer extends Component {
  static propTypes = {
    data: React.PropTypes.object,
  }

  constructor(props) {
    super(props);
    const errorMessage = this.buildMessage(props)
    if (errorMessage) {
      this.state = {
        message: errorMessage,
        open: true,
      }
    } else {
      this.state = {
        message: null,
        open: false,
      }
    }
  }

  buildMessage(props) {
    const { data } = this.props
    console.log('data: ', data)
    let messages = []
    _.forOwn(data, (value, key) => {
      let errorObject = {};
      if (value.error) {
        errorObject.name = key
        errorObject.statusCode = value.error.response.status
        errorObject.statusText = value.error.response.statusText
        errorObject.message = value.error.response.data
        messages.push(errorObject)
      }
    })
    return messages.length == 0 ? null : messages
  }

  componentWillReceiveProps(nextProps) {
    const { message } = this.state
    const newMessage = this.buildMessage(nextProps)
    console.log('old message: ', message, 'new message: ',newMessage)
    if (!_.isEqual(message, newMessage)) {
      this.setState({
        message: newMessage,
        open: true,
      })
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
    data: state.core.get('data').toJS()
  }
}

const Errors = connect(mapStateToProps)(ErrorsContainer)

export default Errors
