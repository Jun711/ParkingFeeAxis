import React, { Component } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

export default class SeparatorComponent extends Component {
  render() {
    return (
      <View style={styles.separator} />
    );
  }
}

const SEPARATOR_HEIGHT = StyleSheet.hairlineWidth;

const styles = StyleSheet.create({
  separator: {
    height: SEPARATOR_HEIGHT,
    backgroundColor: '#8E8E8E',
    marginLeft: 40,
  }
})