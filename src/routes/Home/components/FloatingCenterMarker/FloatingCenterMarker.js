import React from 'react';
import {Text} from 'react-native';
import {View, Button} from 'native-base';

import styles from './FloatingCenterMarkerStyles';

export default class FloatingCenterMarker extends React.Component {
  render() {
    return (
      <Button style={styles.centerMarker} onPress={() => this.props.displayCentreCoord()}/>
    )
  }
}
