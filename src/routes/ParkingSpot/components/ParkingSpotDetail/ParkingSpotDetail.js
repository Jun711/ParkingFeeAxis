import React, { Component } from 'react'
import { Text, ScrollView, View } from 'react-native'
import styles from './ParkingSpotDetailStyles'
import IconWithText from '..././../../components/IconWithText/IconWithText'

export default class ParkingSpotDetail extends Component {

  constructor(props) {
    super(props)
    this._presentRate = this.props.presentRateText
    this._hourCount = this.props.presentTimeLimitText && this.props.presentTimeLimitText.startsWith('no') ?
      'There is no time limit.' : `Time limit is ${this.props.presentTimeLimitText}.`
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <IconWithText
            icon='money'
            message={`It is ${this._presentRate} now.`}
          />
          <IconWithText
            icon='hourglass-start'
            message={this._hourCount}
          />
        </View>
        <Text
          allowFontScaling={true}
          style={styles.detailText}>{this.props.calloutDetail}</Text>
      </ScrollView>
    )
  }
}
