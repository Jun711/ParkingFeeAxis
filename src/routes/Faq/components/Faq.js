import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, ActivityIndicator } from 'react-native';
import { Container } from 'native-base'
import Loader from '../../../components/Loader/Loader';
import FaqList from './FaqList/FaqList';

class Faq extends Component {

  componentWillMount() {
    this.props.loadFaqList();
  }

  render() {
    return (
      <View style={styles.container}>
        {!this.props.faqLoaded && <Loader/>}
        {this.props.faqLoaded && <FaqList/>}
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