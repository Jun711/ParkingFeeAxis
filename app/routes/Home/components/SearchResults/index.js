import React from 'react';
import {Text} from 'react-native';
import {View, List, ListItem, Left} from 'native-base';
import styles from './SearchResultsStyles.js';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const SearchResults = ()=> {
  return(
    <View style={styles.searchResultsWrapper}>
      <List>
        <ListItem button avatar>
          <Left style={styles.leftContainer}>
            <Icon style={styles.leftIcon} name="location-on" />
          </Left>
          <Text>List item 1</Text>
        </ListItem>
        <ListItem><Text>List item 2</Text></ListItem>
      </List>
    </View>
  )
}

export default SearchResults;
