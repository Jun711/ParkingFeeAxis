import { connect } from 'react-redux'
import About from '../components/About'

import {
  openPage
} from '../modules/about'

const mapStateToProps = (state) => ({
  currentPage: state.about.currentPage || '',
})

// so that the component knows these actions exist
const mapActionCreators = {
  openPage
}

export default connect(mapStateToProps, mapActionCreators)(About)