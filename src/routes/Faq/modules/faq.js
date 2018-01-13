// contains actions and handlers
import update from 'immutability-helper'
import constants from './actionConstants'
import { PermissionsAndroid, Dimensions, ToastAndroid } from 'react-native'
import {} from '../../../util/constants'
import {
  PARKING_FAQS,
} from '../../../util/constants'
import {
  handleLoadFaqList
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
      const response = await fetch(PARKING_FAQS)
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
  LOAD_FAQ_LIST: handleLoadFaqList
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