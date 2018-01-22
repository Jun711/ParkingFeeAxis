import React, { Component } from 'react'
import { AppRegistry, ScrollView, StyleSheet } from 'react-native'
import ParkingSpotDetail from './ParkingSpotDetail/ParkingSpotDetail'
import BottomBannerAd from '../../../components/BottomBannerAd/BottomBannerAd'

class ParkingSpot extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <ParkingSpotDetail
          calloutDetail={this.props.calloutDetail}
          presentRateText={this.props.presentRateText}
          presentTimeLimitText={this.props.presentTimeLimitText}
        />
        <BottomBannerAd />
      </ScrollView>
    )
  }
}

export default ParkingSpot

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
})

AppRegistry.registerComponent('ParkingSpot', () => ParkingSpot)