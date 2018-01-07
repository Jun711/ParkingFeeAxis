import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';


export default class Component2 extends Component {
  onPress() {
    console.log('onPress area')
  }

  onPressOp() {
    console.log('onPress area2')
  }

  render() {
    return (
      <View>
        <View style={styles.myView}>
          <Text style={styles.myText}>Hello Brad</Text>
        </View>
        <View style={styles.container}>
          <TouchableHighlight
            style={styles.v1}
            onPress={this.onPress}
            underlayColor="blue"
          >
            <View>
              <Text>View 1</Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity
            style={styles.v2}
            onPress={this.onPressOp}
          >
            <View>
              <Text>View 2</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.v3}>
            <Text style={styles.vText3}>View 3</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myView: {
    backgroundColor: 'blue'
  },
  myText: {
    color: 'white'
  },
  container: {
    // flex container
    flexDirection: 'row',
    height: 100
  },
  v1: {
    flex: 1,
    backgroundColor: 'red',
    padding: 10
  },
  v2: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 10
  },
  v3: {
    flex: 1,
    backgroundColor: 'yellow',
    padding: 10
  },
  vText3: {
    color: 'white'
  }
});

AppRegistry.registerComponent('Component2', () => Component2);