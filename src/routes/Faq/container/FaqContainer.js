import { connect } from 'react-redux';
import Faq from '../components/Faq';

import {
  loadFaqList,
} from '../modules/faq';

const mapStateToProps = (state) => ({})

// so that the component knows these actions exist
const mapActionCreators = {
  loadFaqList,
};

export default connect(mapStateToProps, mapActionCreators)(Faq)