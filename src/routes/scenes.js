import React from 'react'
import { Actions, Scene, Stack } from 'react-native-router-flux'
import AboutContainer from './About/container/AboutContainer'
import ContactContainer from './Contact/container/ContactContainer'
import FaqContainer from './Faq/container/FaqContainer'
import HomeContainer from './Home/container/HomeContainer'
import ParkingSpotContainer from './ParkingSpot/container/ParkingSpotContainer'
import { WHITE_COLOR, THEME_COLOR } from '../util/constants'

const scenes = Actions.create(
  <Stack
    hideNavBar
    key='root'
    duration={10}
  >
    <Scene key='home' component={HomeContainer} title='home' initial/>
    <Stack key='parkingSpot'>
      <Scene
        navigationBarStyle={{backgroundColor: THEME_COLOR}}
        key='_parkingSpot'
        component={ParkingSpotContainer}
        title='Parking Spot'
        titleStyle={{alignSelf: 'flex-start', color: WHITE_COLOR}}
        leftButtonStyle={{color: WHITE_COLOR}}
        backButtonTintColor={WHITE_COLOR}
        back={true}
      />
    </Stack>
    <Stack key='about'
           back
           backTitle="Back"
           duration={10}
    >
      <Scene
        navigationBarStyle={{backgroundColor: THEME_COLOR}}
        key='_about'
        component={AboutContainer}
        title='About'
        titleStyle={{alignSelf: 'flex-start', color: WHITE_COLOR}}
        leftButtonStyle={{color: WHITE_COLOR}}
        backButtonTintColor={WHITE_COLOR}
        back={true}
      />
      <Scene
        backButtonTintColor={WHITE_COLOR}
        navigationBarStyle={{backgroundColor: THEME_COLOR}}
        key='contact'
        component={ContactContainer}
        title='Hello'
        titleStyle={{alignSelf: 'flex-start', color: WHITE_COLOR}}
        back={true}
      />
      <Scene
        backButtonTintColor={WHITE_COLOR}
        navigationBarStyle={{backgroundColor: THEME_COLOR}}
        key='faq'
        component={FaqContainer}
        title='FAQ'
        titleStyle={{alignSelf: 'flex-start', color: WHITE_COLOR}}
        back={true}
      />
    </Stack>
  </Stack>
)

export default scenes