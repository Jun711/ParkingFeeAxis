import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, ScrollView } from 'react-native';
import { Container } from 'native-base'
import Brand from './Brand/Brand';
import Info from './Info/Info';

class About extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Brand/>
        <Info openPage={this.props.openPage}/>
      </ScrollView>
    )
  }
}

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#fff'
  }
});

AppRegistry.registerComponent('About', () => About);