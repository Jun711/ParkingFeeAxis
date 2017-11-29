import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet, Dimensions} from 'react-native';
import MapView from 'react-native-maps';

import Component1 from './app/components/Component1/Component1';
import Component2 from './app/components/Component2/Component2';
import Component3 from './app/components/Component3/Component3';
import Component4 from './app/components/Component4/Component4';
import Component5 from './app/components/Component5/Component5';
import Component6 from './app/components/Component6/Component6';
// import Splash from './app/components/Splash/Splash';
// import Login from './app/components/Login/Login';

import { Root, Tabs } from './app/config/router';

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
    const { region } = this.props;
    console.log(region);
    return(
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 49.2625590,
            longitude: -123.0647230,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <MapView.Marker
            draggable 
            coordinate={{
              latitude: 49.2625590,
              longitude: -123.0647230,
            }}>
              <View style={styles.radius}>
                <View style={styles.marker} />
              </View>
          </MapView.Marker>
        </MapView>
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
  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute'
  },
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50/2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0, 112, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    height: 20,
    width: 20,
    borderRadius: 20/2,
    borderWidth: 3,
    borderColor: 'white',
    overflow: 'hidden',
    backgroundColor: 'rgb(0, 122, 255)'
  }
});

AppRegistry.registerComponent('myapp', () => myapp);
