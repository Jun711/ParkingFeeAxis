import React, { Component } from 'react'
import { Text, View, FlatList, TouchableNativeFeedback } from 'react-native'
import SeparatorComponent from '../../../../components/SeparatorComponent/SeparatorComponent'

import styles from './FaqListStyles'

export default class FaqList extends Component {

  _keyExtractor = (item) => item._id

  _renderItem = ({item, index}) => (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.SelectableBackground()}
    >
    <View key={item._id} style={styles.itemContainer}>
      <Text style={styles.faqNumber}>{index + 1})</Text>
      <Text style={styles.faqItem}>{item.text}</Text>
    </View>
    </TouchableNativeFeedback>
  )

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.faqList}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          ItemSeparatorComponent={() => <SeparatorComponent/>}
        />
      </View>
    )
  }
}
