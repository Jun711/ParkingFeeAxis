import React from 'react';
import { View } from 'native-base';
import MapView from 'react-native-maps';

import SearchBox from '../SearchBox/SearchBox';
import SearchResults from '../SearchResults/SearchResults';
import styles from './MapContainerStyles';

const parkingSpotPin = require('../../../../assets/parking-icon.png');

export const MapContainer = ({
                               userCoord,
                               region,
                               displayCentreMarker,
                               getInputData,
                               toggleSearchResultModal,
                               getLocationPredictions,
                               resultTypes,
                               predictions,
                               getSelectedAddress,
                               selectedAddress,
                               handleRegionChangeComplete,
                               nearbyParkingSpots
                             }) => {
  return (
    <View style={styles.container}>
      <MapView
        showsUserLocation={false}
        showsMyLocationButton={true}
        loadingEnabled={true}
        loadingIndicatorColor={'#746855'}
        provider={MapView.PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        onRegionChangeComplete={(event)=> handleRegionChangeComplete(event)}
        customMapStyle={styles.mapStyle}
      >
        <MapView.Marker.Animated
          coordinate={userCoord}
          pinColor='blue'>
          <View style={styles.radius}>
            <View style={styles.marker} />
          </View>
        </MapView.Marker.Animated>
        {/*{displayCentreMarker &&*/}
          {/*<MapView.Marker.Animated*/}
            {/*coordinate={region}>*/}
            {/*<View style={styles.centreMarker} />*/}
          {/*</MapView.Marker.Animated>*/}
        {/*}*/}
        {
          nearbyParkingSpots && nearbyParkingSpots.map((parkingSpot, index) => {
            return(<MapView.Marker.Animated
              key={index}
              coordinate={{
                latitude: parkingSpot.geometry.coordinates[1],
                longitude: parkingSpot.geometry.coordinates[0]
              }}
              image={parkingSpotPin}
            />)
          })
        }
      </MapView>
      <SearchBox
        getInputData={getInputData}
        toggleSearchResultModal={toggleSearchResultModal}
        getLocationPredictions={getLocationPredictions}
        selectedAddress={selectedAddress}
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