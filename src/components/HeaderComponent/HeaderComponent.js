import React from 'react';
import { Text, Image } from 'react-native';
import { Header, Left, Body, Right, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './HeaderComponentStyles';

const logo = require('../../assets/shuriken.png');

export const HeaderComponent = () => {
  return (
    <Header style={styles.container} iosBarStyle="light-content" androidStatusBarColor="#FF5E3A">
      <Left style={{flex: 1}}>
        <Button transparent>
          <Icon name="bars" style={styles.icon}/>
        </Button>
      </Left>
      <Body style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/*<Text style={styles.headerText}>Parking</Text>*/}
      <Image resizeMode="contain" style={styles.logo} source={logo}/>
      </Body>
      <Right style={{flex: 1}}>
        <Button transparent>
          <Icon name="gift" style={styles.icon}/>
        </Button>
      </Right>
    </Header>
  );
}

export default HeaderComponent;