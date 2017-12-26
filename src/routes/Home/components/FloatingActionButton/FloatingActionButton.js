import React from 'react';
import {Text} from 'react-native';
import {View, Button} from 'native-base';

import styles from './FloatingActionButtonStyles';

export const FloatingActionButton = ({onPressAction}) => {
  return (
    <Button style={styles.fabContainer} onPress={onPressAction} />
  )
}

export default FloatingActionButton; 