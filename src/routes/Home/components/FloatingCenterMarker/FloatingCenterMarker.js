import React, { Component } from 'react';
import { View, Button } from 'native-base';

import styles from './FloatingCenterMarkerStyles';

export default class FloatingCenterMarker extends Component {
  render() {
    return (
      <Button style={styles.centerMarker} onPress={() => this.props.displayCentreCoord()}/>
    )
  }
}
