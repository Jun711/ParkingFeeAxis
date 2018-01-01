import React, {Component} from 'react'
import {Text} from 'react-native'
import {View, InputGroup, Input} from 'native-base'
import styles from './SearchBoxStyles'
import Icon from 'react-native-vector-icons/FontAwesome'

// export const SearchBox = ({getInputData, toggleSearchResultModal, getLocationPredictions, selectedAddress})=> {
export default class SearchBox extends Component {

  constructor(props) {
    super(props);
    this.selectedPickUp = this.props.selectedAddress.selectedPickUp || {};
    this.selectedDropOff = this.props.selectedAddress.selectedDropOff || {};
  }

  handleInput(key, val) {
    this.props.getInputData({
      key,
      value: val
    });
    this.props.getLocationPredictions();
  }

  render() {
    return(
      <View style={styles.searchBox}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>PICK UP</Text>
          <InputGroup>
            <Icon name='search' size={15} color='#FF5E3A'/>
            <Input
              onFocus={() => this.props.toggleSearchResultModal('pickUp')}
              style={styles.inputSearch}
              placeholder='Choose pick-up location.'
              onChangeText={this.handleInput.bind(this, 'pickUp')}
              value={this.selectedPickUp && this.selectedPickUp.name}
            />
          </InputGroup>
        </View>
        <View style={styles.secondInputWrapper}>
          <Text style={styles.label}>DROP OFF</Text>
          <InputGroup>
            <Icon name='search' size={15} color='#FF5E3A'/>
            <Input
              onFocus={() => this.props.toggleSearchResultModal('dropOff')}
              style={styles.inputSearch}
              placeholder='Choose drop-off location.'
              onChangeText={this.handleInput.bind(this, 'dropOff')}
              value={this.selectedDropOff && this.selectedDropOff.name}
            />
          </InputGroup>
        </View>
      </View>
    )
  }

}
