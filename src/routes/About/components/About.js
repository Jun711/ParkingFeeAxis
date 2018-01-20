import React, { Component } from 'react';
import { AppRegistry, StyleSheet, ScrollView } from 'react-native';
import { Container } from 'native-base'
import Brand from './Brand/Brand';
import Info from './Info/Info';
import BottomBannerAd from '../../../components/BottomBannerAd/BottomBannerAd'

class About extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Brand/>
        <Info openPage={this.props.openPage}/>
        <BottomBannerAd/>
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