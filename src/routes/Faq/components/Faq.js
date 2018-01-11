import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, Text } from 'react-native';
import { Container } from 'native-base'
import FaqList from './FaqList/FaqList';

class Faq extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FaqList/>
      </View>
    )
  }
}

export default Faq;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
});

AppRegistry.registerComponent('Faq', () => Faq);