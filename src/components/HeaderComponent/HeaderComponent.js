import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { Header, Left, Right, Button, Input, Item, InputGroup } from 'native-base'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './HeaderComponentStyles'
import { SEARCH_INPUT_KEY, SEARCH_PLACEHOLDER, THEME_COLOR } from '../../util/constants'
import debounce from 'lodash/debounce'

export class HeaderComponent extends Component {

  constructor(props) {
    super(props)
    this.debouncedHandleInput = debounce(this.handleInput.bind(this), 500)
  }

  handleInput(val) {
    this.props.handleSearchInput({
      'key': SEARCH_INPUT_KEY,
      'value': val
    })
    this.props.getLocationPredictions();
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
            <Button transparent onPress={() => this.props.onHeaderBackPressed({value: false})}>
              <MaterialIcon name='arrow-left' style={styles.backIcon}/>
            </Button>
          </TouchableOpacity>
        </Left>
        }
        <Item style={{flex: 6, height: 40}}
              onPress={(evt) => this.props.onHeaderPressed(evt.nativeEvent)}>
          {!this.props.displaySearchBar &&
          <Text style={styles.headerText}>{SEARCH_PLACEHOLDER}</Text>
          }
          {this.props.displaySearchBar &&
          <Input
            placeholderTextColor={THEME_COLOR}
            autoFocus={true}
            style={styles.inputSearch}
            placeholder={SEARCH_PLACEHOLDER}
            underlineColorAndroid={'transparent'}
            onChangeText={this.debouncedHandleInput}
          />
          }
        </Item>
        <Right style={{flex: 1}}>
          <TouchableOpacity>
            <Button transparent onPress={Actions.about}>
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