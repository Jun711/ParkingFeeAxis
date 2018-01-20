import React, { Component } from 'react'
import { AppRegistry, View, StyleSheet } from 'react-native'
import { Container } from 'native-base'
import Loader from '../../../components/Loader/Loader'
import FaqList from './FaqList/FaqList'
import Error from '../../../components/Error/Error'
import { FAQ_LOADING_ERROR } from '../../../util/constants'
import BottomBannerAd from '../../../components/BottomBannerAd/BottomBannerAd'

class Faq extends Component {

  componentWillMount() {
    this.props.loadFaqList()
  }

  render() {
    return (
      <View style={styles.container}>
        {!this.props.loadingError && !this.props.faqLoaded && <Loader/>}
        {this.props.faqLoaded && <FaqList faqList={this.props.faqList}/>}
        {this.props.loadingError && <Error errorMsg={FAQ_LOADING_ERROR}/>}
        <BottomBannerAd/>
      </View>
    )
  }
}

export default Faq

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
})

AppRegistry.registerComponent('Faq', () => Faq)