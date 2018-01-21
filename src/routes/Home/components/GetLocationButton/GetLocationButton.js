import React, { Component } from 'react'
import { View, Button } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './GetLocationButtonStyles'

export default class GetLocationButton extends Component {
  render() {
    return (
      <View>
        <Button style={styles.container} onPress={() => this.props.getCurrentLocation()}>
          <Icon name='crosshairs' style={styles.icon}/>
        </Button>
      </View>
    )
  }
}
