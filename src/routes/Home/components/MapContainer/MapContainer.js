import React, { Component } from 'react';
import { Text } from 'react-native';
import { View } from 'native-base';
import MapView from 'react-native-maps';
import SearchBox from '../SearchBox/SearchBox';
import SearchResults from '../SearchResults/SearchResults';
import MapCallout from '../MapCallout/MapCallout';
import { LOADER_COLOR } from '../../../../util/constants';
import styles from './MapContainerStyles';

const greenPin = require('../../../../assets/greenPin.png');
const yellowPin = require('../../../../assets/yellowPin.png');
const orangePin = require('../../../../assets/orangePin.png');
const redPin = require('../../../../assets/redPin.png');

export default class MapContainer extends Component {

  decidePin(rate) {
    if (this.props.lowestRate == rate) {
      return greenPin
    } else if (this.props.highestRate == rate) {
      return redPin
    } else {
      return yellowPin  
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView.Animated
          showsUserLocation={false}
          showsMyLocationButton={true}
          loadingEnabled={true}
          // scrollEnabled={false}
          rotateEnabled={true}
          moveOnMarkerPress={false}
          loadingIndicatorColor={LOADER_COLOR}
          provider={MapView.PROVIDER_GOOGLE}
          style={styles.map}
          region={this.props.region}
          onRegionChangeComplete={(event) => this.props.handleRegionChangeComplete(event)}
          // customMapStyle={styles.mapStyle}
          onPress={(event) => this.props.onMapPressed(event.nativeEvent)}
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
              let pin = this.decidePin.bind(this, parkingSpot.properties.presentRate)()

              return (<MapView.Marker
                key={index}
                coordinate={{
                  latitude: parkingSpot.geometry.geometries ? parkingSpot.geometry.geometries[0].coordinates[1] : parkingSpot.geometry.coordinates[1],
                  longitude: parkingSpot.geometry.geometries ? parkingSpot.geometry.geometries[0].coordinates[0] : parkingSpot.geometry.coordinates[0]
                }}
                title='Parking Meter'
                description={parkingSpot.properties.description}
                image={pin}
                onPress={(event) => this.props.onMarkerPressed(event.nativeEvent)}
              >
                <MapView.Callout tooltip={true}>
                  <MapCallout
                    text={parkingSpot.properties.description}
                  />
                </MapView.Callout>
              </MapView.Marker>)
            })
          }
        </MapView.Animated>
        {/*<SearchBox*/}
        {/*getInputData={this.props.getInputData}*/}
        {/*toggleSearchResultModal={this.props.toggleSearchResultModal}*/}
        {/*getLocationPredictions={this.props.getLocationPredictions}*/}
        {/*selectedAddress={this.props.selectedAddress}*/}
        {/*/>*/}
        {/*{(this.props.resultTypes.pickUp || this.props.resultTypes.dropOff) &&*/}
        {/*<SearchResults*/}
        {/*predictions={this.props.predictions}*/}
        {/*getSelectedAddress={this.props.getSelectedAddress}*/}
        {/*/>*/}
        {/*}*/}
      </View>
    )
  }
}