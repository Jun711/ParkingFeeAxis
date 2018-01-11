import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import FaqData from './FaqData';
import SeparatorComponent from '../../../../components/SeparatorComponent/SeparatorComponent';

import styles from './FaqListStyles';

export default class FaqList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={FaqData}
          renderItem={
            ({item}) => (
              <View key={item.key} style={styles.itemContainer}>
                <Text style={styles.faqNumber}>{item.key})</Text>
                <Text style={styles.faqItem}>{item.text}</Text>
              </View>)
          }
          ItemSeparatorComponent={() => <SeparatorComponent/>}
        />
      </View>
    )
  }
}
