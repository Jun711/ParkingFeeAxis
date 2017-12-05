import React from 'react';
import {AppRegistry, View, Text, StyleSheet} from 'react-native';

class Home extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>Park now</Text>
      </View>
    )
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

AppRegistry.registerComponent('Home', () => Home);