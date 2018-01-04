import React, { Component } from 'react';
import { Text } from 'react-native';
import { CALLOUT_TEXT } from '../../../../util/constants';

import styles from './MapCalloutStyles';

export default class MapCallout extends Component {

  constructor(props) {
    super(props);
    this.state = {...props};
  }

  processText(text) {
    let textArr = text.split('<br>');

    for (let i = 0; i < textArr.length; i++) {
      if (textArr[i] && !textArr[i].endsWith('\n'))
        textArr[i] += '\n';
    }

    this.setState({text: textArr.join('').trim()})
  }

  componentWillMount() {
    this.processText(this.props.text);
  }

  render() {
    let calloutText = this.props.text ? this.state.text : CALLOUT_TEXT;
    return (
      <Text style={styles.mapCalloutText}
            selectable={true}
            adjustsFontSizeToFit={true}
      >{calloutText}</Text>
    )
  }
}
