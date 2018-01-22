import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import Root from './src/main';

// import MapView from 'react-native-maps';
// import Component1 from './src/components/Component1/Component1';
// import Component2 from './src/components/Component2/Component2';
// import Component3 from './src/components/Component3/Component3';
// import Component4 from './src/components/Component4/Component4';
// import Component5 from './src/components/Component5/Component5';
// import Component6 from './src/components/Component6/Component6';
// import Splash from './src/components/Splash/Splash';
// import Login from './src/components/Login/Login';
// import Map from './src/components/Map/Map';
// import BottomBannerAd from './src/components/BottomBannerAd/BottomBannerAd'
// import { Root, Tabs } from './src/config/router';


export default class myapp extends Component {
// {/*<View>*/}
// {/*/!*<Component1 />*!/*/}
// {/*/!*<Component2 />*!/*/}
// {/*/!*<Component3 />*!/*/}
// {/*/!*<Component4 />*!/*/}
// {/*/!*<Component5 />*!/*/}
// {/**/}
// {/*</View>*/}
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <View style={styles.container}>
        <Root {...this.props}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('myapp', () => myapp);
