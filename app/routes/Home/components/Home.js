import React from 'react';
import {AppRegistry, View, Text, StyleSheet, Dimensions} from 'react-native';

import {Container} from 'native-base'
import MapContainer from './MapContainer';

const {width, height} = Dimensions.get('window');

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.020
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class Home extends React.Component {

  componentDidMount() {
    this.props.getCurrentLocation();
  }

  render() {
    let region = {
      latitude: 49.2820,
      longitude: -123.1171,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }
    return(
      <Container>
        {this.props.region.latitude &&
          <MapContainer
            region={this.props.region}
            getInputData={this.props.getInputData}
            toggleSearchResultModal={this.props.toggleSearchResultModal}
            getLocationPredictions={this.props.getLocationPredictions}
            resultTypes={this.props.resultTypes}
          />
        }
      </Container>
    )
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

AppRegistry.registerComponent('Home', () => Home);