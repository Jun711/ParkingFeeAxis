import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet, Dimensions} from 'react-native';
import MapView from 'react-native-maps';

// import Component1 from './app/components/Component1/Component1';
// import Component2 from './app/components/Component2/Component2';
// import Component3 from './app/components/Component3/Component3';
// import Component4 from './app/components/Component4/Component4';
// import Component5 from './app/components/Component5/Component5';
// import Component6 from './app/components/Component6/Component6';
// import Splash from './app/components/Splash/Splash';
// import Login from './app/components/Login/Login';
import Map from './app/components/Map/Map';

// import { Root, Tabs } from './app/config/router';

const {width, height} = Dimensions.get('window');


export default class myapp extends Component {
// {/*<View>*/}
// {/*/!*<Component1 />*!/*/}
// {/*/!*<Component2 />*!/*/}
// {/*/!*<Component3 />*!/*/}
// {/*/!*<Component4 />*!/*/}
// {/*/!*<Component5 />*!/*/}
// {/**/}
// {/*</View>*/}

  render() {
    return(
      <View style={styles.container}>
        <Map />
      </View>
    );
  }
}

// let { width, height } = Dimensions.get('window');
// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     height: 400,
//     width: 400,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('myapp', () => myapp);
