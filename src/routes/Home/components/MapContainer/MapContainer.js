import React, { Component } from 'react'
import { View } from 'native-base'
import MapView from 'react-native-maps'
import MapCallout from '../MapCallout/MapCallout'
import { LOADER_COLOR, DEBOUNCE_MAP_SEARCH } from '../../../../util/constants'
import styles from './MapContainerStyles'
import debounce from "lodash.debounce";

const greenPin = require('../../../../assets/greenPin.png')
const yellowPin = require('../../../../assets/yellowPin.png')
const redPin = require('../../../../assets/redPin.png')

export default class MapContainer extends Component {

  constructor(props) {
    super(props)
    this.debouncedMapSearch = debounce(this._handleRegionChangeComplete.bind(this), DEBOUNCE_MAP_SEARCH)
  }

  decidePin(rate) {
    if (this.props.lowestRate == rate) {
      return greenPin
    } else if (this.props.highestRate == rate) {
      return redPin
    } else {
      return yellowPin
    }
  }
  _handleRegionChangeComplete(event) {
    this.props.handleRegionChangeComplete(event)
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView.Animated
          showsUserLocation={false}
          showsMyLocationButton={true}
          loadingEnabled={true}
          zoomControlEnabled={true}
          rotateEnabled={true}
          moveOnMarkerPress={false}
          loadingIndicatorColor={LOADER_COLOR}
          provider={MapView.PROVIDER_GOOGLE}
          style={styles.map}
          region={this.props.region}
          onRegionChangeComplete={(event) => this.debouncedMapSearch(event)}
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
              let calloutText = `Rate: ${parkingSpot.properties.presentRateText}\nTime limit: ${parkingSpot.properties.presentTimeLimitText}`

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
                <MapView.Callout
                  tooltip={true}
                  onPress={(event) => this.props.onCalloutPressed({
                    event: event.nativeEvent,
                    calloutDetail: parkingSpot.properties.description,
                    presentRateText: parkingSpot.properties.presentRateText,
                    presentTimeLimitText: parkingSpot.properties.presentTimeLimitText
                  })}
                >
                  <MapCallout
                    text={calloutText}
                  />
                </MapView.Callout>
              </MapView.Marker>)
            })
          }
        </MapView.Animated>
      </View>
    )
  }
}