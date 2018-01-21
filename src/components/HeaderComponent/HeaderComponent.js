import React, { Component } from 'react'
import { Text, Keyboard, TouchableOpacity, View, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import { Header, Left, Right, Button, Input, Item, InputGroup, } from 'native-base'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './HeaderComponentStyles'
import { SEARCH_INPUT_KEY, SEARCH_PLACEHOLDER, THEME_COLOR } from '../../util/constants'
import debounce from 'lodash.debounce'

export class HeaderComponent extends Component {

  constructor(props) {
    super(props)
    this.debouncedHandleInput = debounce(this._handleInput.bind(this), 500)
    this._shouldPop = false
    this._shouldGoToAbout = false
    this._isKeyboardUp = false
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this))
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this))
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  _keyboardDidShow() {
    if (Actions.currentScene === '_about') {
      Keyboard.dismiss()
    } else {
      this._isKeyboardUp = true
    }
  }

  _keyboardDidHide() {
    this._isKeyboardUp = false
    if (this._shouldPop) {
      this._shouldPop = false
      this.props.onHeaderBackPressed({value: false})
    } else if (this._shouldGoToAbout) {
      this._shouldGoToAbout = false
      Actions.about()
    }
  }

  _handleInput(val) {
    this.props.handleSearchInput({
      'key': SEARCH_INPUT_KEY,
      'value': val
    })
    this.props.getLocationPredictions()
  }

  _backButtonPressed() {
    if (this._isKeyboardUp) {
      this._shouldPop = true
      Keyboard.dismiss()
    } else {
      this.props.onHeaderBackPressed({value: false})
    }
  }

  _goToAbout() {
    if (this._isKeyboardUp) {
      Keyboard.dismiss()
      this._shouldGoToAbout = true
    } else {
      Actions.about()
    }
  }

  render() {
    return (
      <Header style={styles.container}
              iosBarStyle='light-content'
              androidStatusBarColor='#20252c'
              searchBar={this.props.displaySearchBar}
              rounded
      >
        {!this.props.displaySearchBar &&
        <Left style={{flex: 1}}
        >
          <TouchableOpacity>
            <Button
              transparent
              onPress={(evt) => this.props.onHeaderPressed(evt.nativeEvent)}
            >
              <Icon name='search' style={styles.searchIcon}/>
            </Button>
          </TouchableOpacity>
        </Left>
        }
        {this.props.displaySearchBar &&
        <Left style={{flex: 1}}>
          <TouchableOpacity>
            <Button transparent onPress={() => this._backButtonPressed()}>
              <MaterialIcon name='arrow-left' style={styles.backIcon}/>
            </Button>
          </TouchableOpacity>
        </Left>
        }
        {!this.props.displaySearchBar &&
        <Item style={{flex: 6, height: 40}}
              onPress={(evt) => this.props.onHeaderPressed(evt.nativeEvent)}>
          <Text style={styles.headerText}>{SEARCH_PLACEHOLDER}</Text>
        </Item>
        }
        {this.props.displaySearchBar &&

        <View style={{flex: 6, height: 40}}>
          <TextInput
            autoCorrect={false}
            disableFullscreenUI={true}
            maxLength={40}
            placeholderTextColor={THEME_COLOR}
            autoFocus={true}
            style={styles.inputSearch}
            placeholder={SEARCH_PLACEHOLDER}
            underlineColorAndroid={'transparent'}
            onChangeText={this.debouncedHandleInput}
          />
        </View>
        }
        <Right style={{flex: 1}}>
          <TouchableOpacity>
            <Button transparent onPress={this._goToAbout.bind(this)}>
              <Icon name='gear' style={styles.icon}/>
            </Button>
          </TouchableOpacity>
        </Right>
      </Header>
    )
  }
}

HeaderComponent.propTypes = {
  displaySearchBar: PropTypes.bool
}

export default HeaderComponent