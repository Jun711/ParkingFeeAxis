import React from 'react'
import {Text} from 'react-native'
import {View, InputGroup, Input} from 'native-base'
import styles from './SearchBoxStyles.js'

export const SearchBox = ()=> {
  return(
    <View style={styles.searchBox}>
      <Text style={styles.label}>PICK UP</Text>
      <InputGroup>
        <Input style={styles.inputSearch} placeholder='Choose pick-up location.' />
      </InputGroup>
    </View>
  )
}

export default SearchBox;
