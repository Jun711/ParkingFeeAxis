import React from 'react';
import { View } from 'native-base';
import MapView from 'react-native-maps';

import SearchBox from '../SearchBox/SearchBox';
import SearchResults from '../SearchResults/SearchResults';
import styles from './MapContainerStyles.js';

export const MapContainer = ({
                               region,
                               getInputData,
                               toggleSearchResultModal,
                               getLocationPredictions,
                               resultTypes,
                               predictions,
                               getSelectedAddress}) => {

  return (
    <View style={styles.container}>
      <MapView
        provider={MapView.PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
      >
        <MapView.Marker
          coordinate={region}
          pinColor='blue'>
          <View style={styles.radius}>
            <View style={styles.marker} />
          </View>
        </MapView.Marker>
      </MapView>
      <SearchBox
        getInputData={getInputData}
        toggleSearchResultModal={toggleSearchResultModal}
        getLocationPredictions={getLocationPredictions}
      />
      { (resultTypes.pickUp || resultTypes.dropOff)  &&
        <SearchResults
          predictions={predictions}
          getSelectedAddress={getSelectedAddress}
        />
      }
    </View>
  )
}

export default MapContainer;