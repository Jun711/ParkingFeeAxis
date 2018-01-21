import React, { Component } from 'react'
import { Alert, BackHandler } from 'react-native'
import PropTypes from 'prop-types'
import { Actions, Router } from 'react-native-router-flux'
import scenes from '../routes/scenes'
import { Provider } from 'react-redux'
import { APP_NAME } from '../util/constants'

export default class AppContainer extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  showExitAlert() {
    Alert.alert(
      'Shut Down',
      `Do you want to shut down ${APP_NAME}? :(`,
      [
        {
          text: 'Cancel', onPress: () => {
          }, style: 'cancel'
        },
        {
          text: 'Shut down', onPress: () => {
            BackHandler.exitApp()
          }
        },
      ],
      {cancelable: false}
    )
  }

  onBackPress() {
    if (Actions.state.index !== 0) {
      Actions.pop()
      return true
    }
    this.showExitAlert()
    return true
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router
          backAndroidHandler={this.onBackPress.bind(this)}
          scenes={scenes}
        />
      </Provider>
    )
  }
}