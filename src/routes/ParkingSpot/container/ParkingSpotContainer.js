import { connect } from 'react-redux'
import ParkingSpot from '../components/ParkingSpot'

import {
  loadContactInfo,
} from '../modules/parkingSpot'

const mapStateToProps = (state) => ({
  contactInfoLoaded: state.parkingSpot.contactInfoLoaded || false,
  contactInfo: state.parkingSpot.contactInfo || [],
  loadingError: state.parkingSpot.loadingError || false
})

// so that the component knows these actions exist
const mapActionCreators = {
  loadContactInfo,
}

export default connect(mapStateToProps, mapActionCreators)(ParkingSpot)