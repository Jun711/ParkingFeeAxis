import { connect } from 'react-redux'
import Home from '../components/Home'
import { MIN_PARKING_RATE, MAX_PARKING_RATE } from '../../../util/constants'
import {
  checkLocationPermission,
  getCurrentLocation,
  getInputData,
  getLocationPredictions,
  selectLocation,
  handleRegionChangeComplete,
  displayCentreCoord,
  onCalloutPressed,
  onMarkerPressed,
  onMapPressed,
  onHeaderPressed,
  onHeaderBackPressed
} from '../modules/home'

// pass subsets of application state as props to Home container
const mapStateToProps = (state) => ({
  displayCentreMarker: state.home.displayCentreMarker || false,
  displayLoader: state.home.displayLoader || false,
  displaySearchBar: state.home.displaySearchBar || false,
  highestRate: state.home.highestRate || MAX_PARKING_RATE,
  inputData: state.home.inputData || {},
  locationPermission: state.home.locationPermission || false,
  locationPredictions: state.home.locationPredictions || [],
  lowestRate: state.home.lowestRate || MIN_PARKING_RATE,
  nearbyParkingSpots: state.home.nearbyParkingSpots || [],
  region: state.home.region,
  resultTypes: state.home.resultTypes || {},
  selectedAddress: state.home.selectedAddress || {},
  userCoord: state.home.userCoord,
})

// so that the component knows these actions exist
const mapActionCreators = {
  checkLocationPermission,
  getCurrentLocation,
  getInputData,
  getLocationPredictions,
  selectLocation,
  handleRegionChangeComplete,
  displayCentreCoord,
  onCalloutPressed,
  onMarkerPressed,
  onMapPressed,
  onHeaderPressed,
  onHeaderBackPressed
}
export default connect(mapStateToProps, mapActionCreators)(Home)