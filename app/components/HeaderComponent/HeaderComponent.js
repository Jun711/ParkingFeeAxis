import React from 'react';
import {Header} from 'native-base';

export const HeaderComponent = () => {
    return (
        <Header style={{backgroundColor:"#FF5E3A"}} iosBarStyle="light-content" androidStatusBarColor="#FF5E3A"/>
    );
}

export default HeaderComponent;