import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './InfoStyles';

export default class Info extends Component {

  onPress(event) {
    console.log('contact on press: ', event.nativeEvent)
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.infoItem} onPress={(event) => this.onPress(event)}>Contact</Text>
          <Text style={styles.infoItem} onPress={(event) => this.onPress(event)}>FAQ</Text>
      </View>
    )
  }
}
