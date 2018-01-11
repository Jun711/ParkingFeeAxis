import { combineReducers } from 'redux';
import { HomeReducer as home } from '../routes/Home/modules/home';
import { AboutReducer as about } from '../routes/About/modules/about';

export const makeRootReducer = () => {
  return combineReducers({
    home,
    about
  });
}

export default makeRootReducer;