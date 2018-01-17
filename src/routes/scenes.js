import React from 'react'
import { Actions, Scene, Stack } from 'react-native-router-flux'
import AboutContainer from './About/container/AboutContainer'
import ContactContainer from './Contact/container/ContactContainer'
import FaqContainer from './Faq/container/FaqContainer'
import HomeContainer from './Home/container/HomeContainer'
import { WHITE_COLOR, THEME_COLOR } from '../util/constants'

const scenes = Actions.create(
  <Stack
    hideNavBar
    key='root'
  >
    <Scene key='home' component={HomeContainer} title='home' initial/>
    <Stack key='about'>
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
        title='Contact Me'
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