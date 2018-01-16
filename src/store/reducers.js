import { combineReducers } from 'redux';
import { AboutReducer as about } from '../routes/About/modules/about';
import { FaqReducer as faq } from '../routes/Faq/modules/faq';
import { HomeReducer as home } from '../routes/Home/modules/home';

export const makeRootReducer = () => {
  return combineReducers({
    about,
    faq,
    home,
  });
}

export default makeRootReducer;