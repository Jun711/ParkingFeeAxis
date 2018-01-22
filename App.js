import React, { Component } from 'react'
import {
  AppRegistry,
  View,
  StyleSheet,
} from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import Root from './src/main'

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    return (
      <View style={styles.container}>
        <Root {...this.props}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

AppRegistry.registerComponent('App', () => App)
