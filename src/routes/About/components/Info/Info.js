import React, { Component } from 'react'
import { Text, View, SectionList, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import InfoData from './InfoData'
import SeparatorComponent from '../../../../components/SeparatorComponent/SeparatorComponent'

import styles from './InfoStyles'

export default class Info extends Component {
  _renderItem = ({item}) => (
    <TouchableNativeFeedback
      onPressIn={(event) => this.props.openPage({
        event: event.nativeEvent,
        page: item.key
      })}
      background={TouchableNativeFeedback.SelectableBackground()}
    >
      <View key={item.key} style={styles.itemContainer}>
        <View style={styles.iconContainer}>
          <Icon style={styles.infoIcon} name={item.icon}/>
        </View>
        <Text style={styles.infoItem}>{item.name}</Text>
      </View>
    </TouchableNativeFeedback>)

  _renderSectionHeader = ({section}) => <Text style={styles.sectionTitle}>{section.sectionTitle}</Text>

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={InfoData}
          renderItem={this._renderItem}
          renderSectionHeader={this._renderSectionHeader}
          ItemSeparatorComponent={() => <SeparatorComponent/>}
        />
      </View>
    )
  }
}
