import React, { Component } from 'react';
import { Text, View, SectionList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import InfoData from './InfoData';
import SeparatorComponent from '../../../../components/SeparatorComponent/SeparatorComponent';

import styles from './InfoStyles';

export default class Info extends Component {

  render() {
    console.log('InfoData: ', InfoData)
    return (
      <View style={styles.container}>
        <SectionList
          sections={InfoData}
          renderItem={
            ({item}) => (
              <View key={item.key} style={styles.itemContainer}>
                <View style={styles.iconContainer}>
                  <Icon style={styles.infoIcon} name={item.icon}/>
                </View>
                <Text style={styles.infoItem} onPress={(event) => this.props.openPage({
                  event: event.nativeEvent,
                  page: item.key
                })}>{item.name}</Text>
              </View>)
          }
          renderSectionHeader={
            ({section}) => <Text style={styles.sectionTitle}>{section.sectionTitle}</Text>
          }
          ItemSeparatorComponent={() => <SeparatorComponent/>}
        />
      </View>
    )
  }
}
