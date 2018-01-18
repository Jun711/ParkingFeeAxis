import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from './MapCalloutStyles';

export default class MapCallout extends Component {

  constructor(props) {
    super(props);
    this.state = {...props};
  }

  render() {
    return (
      <Text style={styles.mapCalloutText}
            selectable={true}
            adjustsFontSizeToFit={true}
            allowFontScaling={true}
      >{this.props.text}</Text>
    )
  }
}
