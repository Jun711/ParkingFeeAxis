import React from 'react'
import { Actions, Scene, Stack } from 'react-native-router-flux'
import AboutContainer from './About/container/AboutContainer'
import FaqContainer from './Faq/container/FaqContainer'
import HomeContainer from './Home/container/HomeContainer'
import SearchContainer from './Search/container/SearchContainer'

const scenes = Actions.create(
  <Stack
    hideNavBar
    key='root'
    titleStyle={{alignSelf: 'center'}}
  >
    <Scene key='home' component={HomeContainer} title='home' initial/>
    <Scene key='search' component={SearchContainer} title='search'/>
    <Stack
      key='about'
      titleStyle={{alignSelf: 'center'}}
    >
      <Scene
        key='_about'
        component={AboutContainer}
        title='About'
        titleStyle={{alignSelf: 'flex-start'}}
        back={true}
      />
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