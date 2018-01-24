import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import {
  APP_NAME,
  APP_VERSION
} from '../../../../util/constants'

import styles from './BrandStyles'

export default class Brand extends Component {

  constructor(props) {
    super(props)
    this.state = {...props}
  }

  render() {

    return (
      <View style={styles.container}>
        <Image resizeMode='contain' style={styles.logo} source={require('../../../../assets/icon.png')}/>
        <Text style={styles.appName}>{APP_NAME}</Text>
        <Text style={styles.appVersion}>{APP_VERSION}</Text>
      </View>
    )
  }
}
