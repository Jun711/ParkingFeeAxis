import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Dimensions} from 'react-native';
import MapView from 'react-native-maps';


// import Component1 from './src/components/Component1/Component1';
// import Component2 from './src/components/Component2/Component2';
// import Component3 from './src/components/Component3/Component3';
// import Component4 from './src/components/Component4/Component4';
// import Component5 from './src/components/Component5/Component5';
// import Component6 from './src/components/Component6/Component6';
// import Splash from './src/components/Splash/Splash';
// import Login from './src/components/Login/Login';
import Map from './src/components/Map/Map';
import Root from './src/main';

// import { Root, Tabs } from './src/config/router';

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

// <View style={styles.container}>
//   <Map />
// </View>

  render() {
    return(
      <View style={styles.container}>
       <Root {...this.props}/>
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
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('myapp', () => myapp);
