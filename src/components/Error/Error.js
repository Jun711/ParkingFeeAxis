import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './ErrorStyles'

export class Error extends Component {
  errorMessage

  constructor(props) {
    super(props)
    this.errorMessage = this.props.errorMsg || 'Loading Timeout'
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <View style={styles.iconContainer}>
            <Icon style={styles.infoIcon} name='warning'/>
          </View>
          <Text
            allowFontScaling={true}
            style={styles.infoItem}>{this.errorMessage}</Text>
        </View>
      </View>
    )
  }
}

export default Error
