// contains actions and handlers
import update from 'immutability-helper'
import constants from './actionConstants'
import {} from '../../../util/constants'
import { ToastAndroid } from 'react-native'
import timeout from '../../../util/timeout'
import {
  PARKING_FAQS,
} from '../../../util/constants'
import {
  handleLoadFaqList,
  handleLoadFaqListError
} from './faqActionHandlers'

//-------------------------------
//Constants
//-------------------------------
const {
  LOAD_FAQ_LIST,
  LOAD_FAQ_LIST_ERROR
} = constants

//-------------------------------
// Utility function
//-------------------------------


//-------------------------------
// Actions
//-------------------------------
export function loadFaqList() {
  return async (dispatch) => {
    try {
      const response = await timeout(fetch(PARKING_FAQS))
      const responseJson = await response.json()
      dispatch({
        type: LOAD_FAQ_LIST,
        payload: responseJson
      })
    } catch (error) {
      dispatch({
        type: LOAD_FAQ_LIST_ERROR,
        payload: error
      })
    }
  }
}

//-------------------------------
//Action Handlers
//-------------------------------
const ACTION_HANDLERS = {
  LOAD_FAQ_LIST: handleLoadFaqList,
  LOAD_FAQ_LIST_ERROR: handleLoadFaqListError,
}

//-------------------------------
// Initialization
//-------------------------------
export const initialState = {
  faqLoaded: false,
  faqList: []
}

export function FaqReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}