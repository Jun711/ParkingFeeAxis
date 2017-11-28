import React from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';

import Splash from '../components/Splash/Splash';
import Login from '../components/Login/Login';

import Feed from '../screens/Feed';
import Settings from '../screens/Settings';
import UserDetail from '../screens/UserDetail';
import Me from '../screens/Me';

// export const Tabs = TabNavigator({
//   Feed: {
//     screen: FeedStack,
//     navigationOptions: {
//       tabBarLabel: 'Feed',
//       // tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
//     }
//   },
//   Me: {
//     screen: Me,
//     navigationOptions: {
//       tabBarLabel: 'Me',
//       // tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
//     }
//   }
// })

export const Tabs = TabNavigator({
  Feed: {
    screen: Feed,
  },
  Me: {
    screen: Me,
  }
})

export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: 'Feed',
    }
  },
  Details: {
    screen: UserDetail,
    navigationOptions: ({navigaation}) => ({
      title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`
    }),
  }
});