import React from 'react';
import { AdMobBanner } from 'react-native-admob'

// ca-app-pub-6805425741453021/2887602580 // prod
// ca-app-pub-3940256099942544/6300978111
export const BottomBannerAd = () => {
  return (
    <AdMobBanner
      adSize='smartBannerPortrait'
      adUnitID='ca-app-pub-6805425741453021/2887602580'
      onAdFailedToLoad={error => console.error(error)}
    />
  );
}

export default BottomBannerAd;
