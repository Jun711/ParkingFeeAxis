import React from 'react';
import {TabNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';

import Splash from './app/components/Splash/Splash';
import Login from './app/components/Login/Login';

export const Tabs = TabNavigator({
  Feed: {
    screen: Splash
  },
  Me: {
    screen: Login
  }
})