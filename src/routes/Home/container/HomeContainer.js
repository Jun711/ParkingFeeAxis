import {connect} from 'react-redux';
import Home from '../components/Home';
import {
  getCurrentLocation,
  getInputData,
  toggleSearchResultModal,
  getLocationPredictions,
  getSelectedAddress
} from '../modules/home';

const mapStateToProps = (state) => ({
  region: state.home.region,
  inputData: state.home.inputData || {},
  resultTypes: state.home.resultTypes || {},
  predictions: state.home.predictions || [],
  selectedAddress: state.home.selectedAddress || {}
})

// so that the component knows these actions exist
const mapActionCreators = {
  getCurrentLocation,
  getInputData,
  toggleSearchResultModal,
  getLocationPredictions,
  getSelectedAddress
};
export default connect(mapStateToProps, mapActionCreators)(Home)