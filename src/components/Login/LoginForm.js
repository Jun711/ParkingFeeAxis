import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  StatusBar} from 'react-native';

export default class myapp extends Component {
  render() {
    return(
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <TextInput
          placeholder="username or email"
          placeholderTextColor="rgba(255,255,255,0.5)"
          underlineColorAndroid='transparent'
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
        />
        <TextInput
          placeholder="password"
          placeholderTextColor="rgba(255,255,255,0.5)"
          underlineColorAndroid='transparent'
          returnKeyType="go"
          secureTextEntry
          autoCorrect={false}
          style={styles.input}
          ref={(input) => this.passwordInput = input}
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
});

AppRegistry.registerComponent('myapp', () => myapp);