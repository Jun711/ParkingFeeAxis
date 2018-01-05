import React, { Component } from 'react';
import { AppRegistry, Text, ScrollView, StyleSheet } from 'react-native';

export default class ScrollViewComponent extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>456</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>789</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>456</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>789</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>456</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>789</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>456</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>789</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>456</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>123</Text>
        <Text style={styles.text}>789</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#FF5E3A'
  },
  container: {
    flex: 1
  },
})

AppRegistry.registerComponent('ScrollViewComponent', () => ScrollViewComponent);