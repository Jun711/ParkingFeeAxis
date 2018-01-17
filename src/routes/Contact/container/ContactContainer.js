import { connect } from 'react-redux'
import Contact from '../components/Contact'

import {
  loadContactInfo,
} from '../modules/contact'

const mapStateToProps = (state) => ({
  contactInfoLoaded: state.contact.contactInfoLoaded || false,
  contactInfo: state.contact.contactInfo || []
})

// so that the component knows these actions exist
const mapActionCreators = {
  loadContactInfo,
}

export default connect(mapStateToProps, mapActionCreators)(Contact)