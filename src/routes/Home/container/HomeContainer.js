import { connect } from 'react-redux';
import Home from '../components/Home';
import {
  checkLocationPermission,
  // getLocationPermission,
  getCurrentLocation,
  getInputData,
  toggleSearchResultModal,
  getLocationPredictions,
  getSelectedAddress,
  handleRegionChangeComplete,
  displayCentreCoord,
  onMarkerPressed,
  onMapPressed,
} from '../modules/home';

const mapStateToProps = (state) => ({
  displayCentreMarker: state.home.displayCentreMarker || false,
  locationPermission: state.home.locationPermission || false,
  userCoord: state.home.userCoord,
  region: state.home.region,
  inputData: state.home.inputData || {},
  resultTypes: state.home.resultTypes || {},
  predictions: state.home.predictions || [],
  selectedAddress: state.home.selectedAddress || {},
  nearbyParkingSpots: state.home.nearbyParkingSpots || [],
})

// so that the component knows these actions exist
const mapActionCreators = {
  checkLocationPermission,
  // getLocationPermission,
  getCurrentLocation,
  getInputData,
  toggleSearchResultModal,
  getLocationPredictions,
  getSelectedAddress,
  handleRegionChangeComplete,
  displayCentreCoord,
  onMarkerPressed,
  onMapPressed,
};
export default connect(mapStateToProps, mapActionCreators)(Home)