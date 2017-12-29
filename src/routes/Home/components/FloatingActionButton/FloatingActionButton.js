import React from 'react';
import {Text} from 'react-native';
import {View, Button} from 'native-base';

import styles from './FloatingActionButtonStyles';

export const FloatingActionButton = ({getCurrentLocation}) => {
  return (
    <Button style={styles.fabContainer} onPress={() => getCurrentLocation()} />
  )
}

export default FloatingActionButton;