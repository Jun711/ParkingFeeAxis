import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import SeparatorComponent from '../../../../components/SeparatorComponent/SeparatorComponent'

import styles from './FaqListStyles'

export default class FaqList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.faqList}
          renderItem={
            ({item, index}) => (
              <View key={item.key} style={styles.itemContainer}>
                <Text style={styles.faqNumber}>{index + 1})</Text>
                <Text style={styles.faqItem}>{item.text}</Text>
              </View>)
          }
          ItemSeparatorComponent={() => <SeparatorComponent/>}
        />
      </View>
    )
  }
}
