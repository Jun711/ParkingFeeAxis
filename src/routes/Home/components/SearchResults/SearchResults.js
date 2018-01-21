import React, { Component } from 'react'
import { Text, KeyboardAvoidingView, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { List, ListItem, Left, Body } from 'native-base'
import Loader from '../../../../components/Loader/Loader'
import styles from './SearchResultsStyles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SeparatorComponent from '../../../../components/SeparatorComponent/SeparatorComponent'

export default class SearchResults extends Component {

  _keyExtractor = (item) => item.placeID

  _renderItem = ({item}) => (
    <View>
      <ListItem onPress={() => this.props.selectLocation(item.placeID)} button avatar>
        <Left style={styles.leftContainer}>
          <Icon style={styles.leftIcon} name="location-on"/>
        </Left>
        <Body>
        <Text style={styles.primaryText}>{item.primaryText}</Text>
        <Text style={styles.secondaryText}>{item.secondaryText}</Text>
        </Body>
      </ListItem>
    </View>)

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView style={styles.searchResultsWrapper}>
          {this.props.displayLoader && <Loader/>}
          {this.props.locationPredictions.length > 0 &&
          <View style={styles.container}>
            <FlatList
              keyboardShouldPersistTaps='always'
              keyboardDismissMode='on-drag'
              data={this.props.locationPredictions}
              renderItem={this._renderItem}
              keyExtractor={this._keyExtractor}
              ItemSeparatorComponent={() => <SeparatorComponent/>}
            />
          </View>
          }
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    )
  }
}