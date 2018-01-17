import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './IconWithTextStyles'

export class IconWithText extends Component {

  constructor(props) {
    super(props)
    this._icon = this.props.icon || 'info'
    this._message = this.props.message || 'Loading Timeout'
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <View style={styles.iconContainer}>
            <Icon style={styles.infoIcon} name={this._icon}/>
          </View>
          <Text
            allowFontScaling={true}
            style={styles.infoItem}>{this._message}</Text>
        </View>
      </View>
    )
  }
}

export default IconWithText
