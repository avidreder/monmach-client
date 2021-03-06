import React, { Component, PropTypes } from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { cyan700, grey600, grey700, grey800, grey200, fullWhite, pinkA200, pinkA400, pinkA100, blueA600, blueA700,  blueA800, blueA200, blueA300, blueA400, } from 'material-ui/styles/colors'
import {fade} from 'material-ui/utils/colorManipulator'
import injectTapEventPlugin from 'react-tap-event-plugin'
import * as actionCreators from 'store/coreActionCreators.js'

injectTapEventPlugin()

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueA800,
    primary2Color: blueA700,
    primary3Color: blueA600,
    accent1Color: grey800,
    accent2Color: grey700,
    accent3Color: grey600,
    textColor: grey200,
    secondaryTextColor: '#303030',
    alternateTextColor: '#303030',
    canvasColor: fade(grey600, 0.7),
    borderColor: fade(fullWhite, 0.3),
    disabledColor: fade(fullWhite, 0.3),
    pickerHeaderColor: fade(fullWhite, 0.12),
    clockCircleColor: fade(fullWhite, 0.12),
  },
})

class AppContainer extends Component {
  static propTypes = {
    routes : PropTypes.object.isRequired,
    store  : PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { routes, store } = this.props
    store.dispatch(actionCreators.checkAuth())
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div style={{ height: '100%' }}>
            <Router history={browserHistory} children={routes} />
          </div>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default AppContainer
