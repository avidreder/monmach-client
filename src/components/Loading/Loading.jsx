import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import Loading from 'react-loading'
import _ from 'lodash'

class LoadingDialogContainer extends Component {
  static propTypes = {
    data: React.PropTypes.object,
  }

  constructor(props) {
    super(props);
    const loadingMessage = this.buildMessage(props)
    if (loadingMessage) {
      this.state = {
        message: loadingMessage,
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
    const { data } = props
    let messages = []
    _.forOwn(data, (value, key) => {
      if (value.loading) {
        messages.push(key)
      }
    })
    return messages.length == 0 ? null : messages
  }

  componentWillReceiveProps(nextProps) {
    const { message } = this.state
    const newMessage = this.buildMessage(nextProps)
    if (!_.isEqual(message, newMessage) && newMessage != null) {
      this.setState({
        message: newMessage,
        open: true,
      })
    } else {
      this.setState({
        message: null,
        open: false,
      })
    }
  }

  render() {
    const customContentStyle = {
      width: '100%',
      maxWidth: 'none',
    };
    const { message } = this.state
    return (
      <div>
        <Dialog open={this.state.open}
          contentStyle={ customContentStyle } >
          <div>
            { message && message.map((item) => (
              <div key={ item }>{ item }</div>
            ))}
          </div>
          <Loading type='spinningBubbles' color='#000' />
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

const LoadingDialog = connect(mapStateToProps)(LoadingDialogContainer)

export default LoadingDialog
