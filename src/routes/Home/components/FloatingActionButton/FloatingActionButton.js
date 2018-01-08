import React, { Component } from 'react';
import { Text } from 'react-native';
import { View, Button } from 'native-base';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import styles from './FloatingActionButtonStyles';

export default class FloatingActionButton extends Component {
  render() {
    return (
      <Button style={styles.fabContainer} onPress={() => this.props.getCurrentLocation()}>
        <Icon name="target" style={styles.icon}/>
      </Button>
    )
  }
}
