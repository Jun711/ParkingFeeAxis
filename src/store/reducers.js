import { combineReducers } from 'redux';
import { HomeReducer as home } from '../routes/Home/modules/home';
import { AboutReducer as about } from '../routes/About/modules/about';
import { FaqReducer as faq } from '../routes/Faq/modules/faq';

export const makeRootReducer = () => {
  return combineReducers({
    home,
    about,
    faq
  });
}

export default makeRootReducer;