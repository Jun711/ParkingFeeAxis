import React from 'react';
import { View } from 'react-native';
import { Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './FooterComponentStyles';

export const FooterComponent = () => {
  return (
    <View style={styles.footerContainer}>
      <Button transparent onPress={Actions.about} >
        <Icon name='gear' style={styles.icon}/>
      </Button>
    </View>
  );
}

export default FooterComponent;
