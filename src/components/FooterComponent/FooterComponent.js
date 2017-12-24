import React from 'react';
import {Text} from 'react-native';
import {Footer, FooterTab, Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './FooterComponentStyles';

export const FooterComponent = () => {
  // tab bar items
  const tabs = [{
    title: 'Car',
    subTitle: '',
    icon: 'car'
  },
  {
    title: 'Car',
    subTitle: '',
    icon: 'car'
  },
  {
    title: 'Car',
    subTitle: '',
    icon: 'car'
  }]

  return (
    <Footer>
      <FooterTab style={styles.footerContainer} iosBarStyle='light-content' androidStatusBarColor='#FF5E3A'>
        {
          tabs.map((obj, index) => {
            return (
              <Button key={index}>
                <Icon size={20} name={obj.icon} style={{color:(index === 0) ? '#FF5E3A': '#eee'}}/>
                <Text style={{fontSize:12, color:(index === 0) ? '#FF5E3A': '#eee'}}>{obj.title}</Text>
                <Text style={styles.subtitle}>{obj.subtitle}</Text>
              </Button>
            )
          })
        }
      </FooterTab>
    </Footer>
  );
}

export default FooterComponent;
