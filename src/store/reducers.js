import { combineReducers } from 'redux'
import { AboutReducer as about } from '../routes/About/modules/about'
import { ContactReducer as contact } from '../routes/Contact/modules/contact'
import { FaqReducer as faq } from '../routes/Faq/modules/faq'
import { HomeReducer as home } from '../routes/Home/modules/home'
import { ParkingSpotReducer as parkingSpot } from '../routes/ParkingSpot/modules/parkingSpot'

export const makeRootReducer = () => {
  return combineReducers({
    about,
    faq,
    home,
    contact,
    parkingSpot
  })
}

export default makeRootReducer