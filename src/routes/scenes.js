import React from 'react'
import { Actions, Scene, Stack } from 'react-native-router-flux'
import HomeContainer from './Home/container/HomeContainer'
import AboutContainer from './About/container/AboutContainer'
import FaqContainer from './Faq/container/FaqContainer'

const scenes = Actions.create(
  <Stack
    hideNavBar
    key='root'
    titleStyle={{alignSelf: 'center'}}
  >
    <Scene key='home' component={HomeContainer} title='home' initial/>
    <Stack
      key='about'
      titleStyle={{alignSelf: 'center'}}
    >
      <Scene hideNavBar key='_about' component={AboutContainer} title='about'/>
      <Scene
        hideNavBar={false}
        key='faq'
        component={FaqContainer}
        title='FAQ'
        titleStyle={{alignSelf: 'flex-start'}}
        back={true}
      />
    </Stack>
  </Stack>
)

export default scenes