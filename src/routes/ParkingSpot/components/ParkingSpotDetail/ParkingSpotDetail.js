import React, { Component } from 'react'
import { Text, ScrollView, View } from 'react-native'
import styles from './ParkingSpotDetailStyles'
import IconWithText from '..././../../components/IconWithText/IconWithText'

export default class ParkingSpotDetail extends Component {

  constructor(props) {
    super(props)
    this._presentRate = this.props.presentRate ? this.props.presentRate : 1
    this._hourCount = this.props.hourLimit && this.props.hourLimit > 1 ? 'hours' : 'hour'
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <IconWithText
            icon='money'
            message={`It is $${this._presentRate} per hour.`}
          />
          <IconWithText
            icon='hourglass-start'
            message={`Time limit is ${this._presentRate} ${this._hourCount}.`}
          />
        </View>
        <Text
          allowFontScaling={true}
          style={styles.detailText}>{this.props.calloutDetail}</Text>
      </ScrollView>
    )
  }
}
