import { connect } from 'react-redux'
import Faq from '../components/Faq'

import {
  loadFaqList,
} from '../modules/faq'

const mapStateToProps = (state) => ({
  faqLoaded: state.faq.faqLoaded || false,
  faqList: state.faq.faqList || []
})

// so that the component knows these actions exist
const mapActionCreators = {
  loadFaqList,
}

export default connect(mapStateToProps, mapActionCreators)(Faq)