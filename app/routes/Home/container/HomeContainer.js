import {connect} from 'react-redux';
import Home from '../components/Home';
import {
  setTime
} from '../modules/home';

const mapStateToProps = (state) => ({
  time: state.home.time
})

const mapActionCreators = {
  setTime
};
export default connect(mapStateToProps, mapActionCreators)(Home)