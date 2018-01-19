import React, { Component } from 'react';
import { Text } from 'react-native';
import { View, List, ListItem, Left, Body } from 'native-base';
import Loader from '../../../../components/Loader/Loader'
import styles from './SearchResultsStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class SearchResults extends Component {
  render() {
    return (
      <View style={styles.searchResultsWrapper}>
        {this.props.displayLoader && <Loader/>}
        {this.props.locationPredictions.length > 0 &&
        <List
          dataArray={this.props.locationPredictions}
          renderRow={(item) =>
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
            </View>
          }
        />
        }
      </View>
    )
  }
}