import React, {Component} from 'react';
import {Text} from 'react-native';
import {View, List, ListItem, Left, Body} from 'native-base';
import styles from './SearchResultsStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

// export const SearchResults = ({predictions, getSelectedAddress})=> {
export default class SearchResults extends Component {

  handleSelectedAddress(placeID) {
    this.props.getSelectedAddress(placeID);
  }

  render() {
    return(
      <View style={styles.searchResultsWrapper}>
        <List
          dataArray={this.props.predictions}
          renderRow={(item) =>
            <View>
              <ListItem onPress={()=> handleSelectedAddress(item.placeID)} button avatar>
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
      </View>
    )
  }
}