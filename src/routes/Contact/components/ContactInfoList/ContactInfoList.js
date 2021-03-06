import React, { Component } from 'react'
import { Text, View, FlatList, TouchableNativeFeedback, Linking } from 'react-native'
import SeparatorComponent from '../../../../components/SeparatorComponent/SeparatorComponent'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './ContactInfoListStyles'

export default class ContactInfoList extends Component {

  _keyExtractor = (item) => item._id

  _renderItem = ({item}) => {

    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.SelectableBackground()}
        onPress={() => Linking.openURL(item.link)}
      >
        <View style={styles.itemContainer}>
          <View style={styles.iconContainer}>
            <Icon style={styles.infoIcon} name={item.icon}/>
          </View>
          <Text style={styles.infoItem}>{item.text}</Text>
        </View>
      </TouchableNativeFeedback>)
  }


  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.contactInfo}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          ItemSeparatorComponent={() => <SeparatorComponent/>}
        />
      </View>
    )
  }
}
