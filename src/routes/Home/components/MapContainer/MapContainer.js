import React, { Component } from 'react';
import { View } from 'native-base';
import MapView from 'react-native-maps';

import SearchBox from '../SearchBox/SearchBox';
import SearchResults from '../SearchResults/SearchResults';
import styles from './MapContainerStyles';

const parkingSpotPin = require('../../../../assets/parking-icon.png');

export default class MapContainer extends Component {
  constructor(props) {
    super(props);
    console.log('this.props: ', props);
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          showsUserLocation={false}
          showsMyLocationButton={true}
          loadingEnabled={true}
          loadingIndicatorColor={'#746855'}
          provider={MapView.PROVIDER_GOOGLE}
          style={styles.map}
          region={this.props.region}
          onRegionChangeComplete={(event) => this.props.handleRegionChangeComplete(event)}
          customMapStyle={styles.mapStyle}
        >
          <MapView.Marker.Animated
            coordinate={this.props.userCoord}
            pinColor='blue'>
            <View style={styles.radius}>
              <View style={styles.marker}/>
            </View>
          </MapView.Marker.Animated>
          {
            this.props.nearbyParkingSpots && this.props.nearbyParkingSpots.map((parkingSpot, index) => {
              return (<MapView.Marker.Animated
                key={index}
                coordinate={{
                  latitude: parkingSpot.geometry.geometries ? parkingSpot.geometry.geometries[0].coordinates[1] : parkingSpot.geometry.coordinates[1],
                  longitude: parkingSpot.geometry.geometries ? parkingSpot.geometry.geometries[0].coordinates[0] : parkingSpot.geometry.coordinates[0]
                }}
                description={parkingSpot.properties.description}
                // pinColor='blue'
                image={parkingSpotPin}
              />)
            })
          }
        </MapView>
        <SearchBox
          getInputData={this.props.getInputData}
          toggleSearchResultModal={this.props.toggleSearchResultModal}
          getLocationPredictions={this.props.getLocationPredictions}
          selectedAddress={this.props.selectedAddress}
        />
        {(this.props.resultTypes.pickUp || this.props.resultTypes.dropOff) &&
        <SearchResults
          predictions={this.props.predictions}
          getSelectedAddress={this.props.getSelectedAddress}
        />
        }
      </View>
    )
  }
}