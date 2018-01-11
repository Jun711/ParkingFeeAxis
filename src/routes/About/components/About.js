import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, ScrollView } from 'react-native';
import { Container } from 'native-base'
import Brand from './Brand/Brand';
import Info from './Info/Info';

class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Brand />
          <Info />
        </ScrollView>
      </View>
    )
  }
}

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

AppRegistry.registerComponent('About', () => About);