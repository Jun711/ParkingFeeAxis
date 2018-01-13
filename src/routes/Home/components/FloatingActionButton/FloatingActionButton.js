import React, { Component } from 'react'
import { View, Button } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './FloatingActionButtonStyles'

export default class FloatingActionButton extends Component {
  render() {
    return (
      <Button style={styles.fabContainer} onPress={() => this.props.getCurrentLocation()}>
        <Icon name='crosshairs' style={styles.icon}/>
      </Button>
    )
  }
}
